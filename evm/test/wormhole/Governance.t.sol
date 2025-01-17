// SPDX-License-Identifier: Apache 2
pragma solidity >=0.8.8 <0.9.0;

import "../../src/wormhole/Governance.sol";
import "forge-std/console.sol";
import "forge-std/Test.sol";
import "openzeppelin-contracts/contracts/access/Ownable.sol";
import "wormhole-solidity-sdk/testing/helpers/WormholeSimulator.sol";

contract GovernedContract is Ownable {
    error RandomError();

    bool public governanceStuffCalled;

    function governanceStuff() public onlyOwner {
        governanceStuffCalled = true;
    }

    function governanceRevert() public view onlyOwner {
        revert RandomError();
    }
}

contract GovernanceTest is Test {
    uint256 constant DEVNET_GUARDIAN_PK =
        0xcfb12303a19cde580bb4dd771639b0d26bc68353645571a8cff516ab2ee113a0;

    Governance governance;
    WormholeSimulator guardian;
    GovernedContract myContract;
    IWormhole constant wormhole = IWormhole(0x706abc4E45D419950511e474C7B9Ed348A4a716c);

    function setUp() public {
        string memory url = "https://ethereum-goerli.publicnode.com";
        vm.createSelectFork(url);

        guardian = new WormholeSimulator(address(wormhole), DEVNET_GUARDIAN_PK);
        governance = new Governance(address(wormhole));

        myContract = new GovernedContract();
        myContract.transferOwnership(address(governance));
    }

    function buildGovernanceVaa(
        uint8 action,
        uint16 chainId,
        address governanceContract,
        address governedContract,
        bytes memory callData
    ) public view returns (bytes memory) {
        Governance.GeneralPurposeGovernanceMessage memory message = Governance
            .GeneralPurposeGovernanceMessage({
            action: action,
            chain: chainId,
            governanceContract: governanceContract,
            governedContract: governedContract,
            callData: callData
        });

        IWormhole.VM memory vaa =
            buildVaa(governance.encodeGeneralPurposeGovernanceMessage(message));

        return guardian.encodeAndSignMessage(vaa);
    }

    function buildVaa(bytes memory payload) public view returns (IWormhole.VM memory) {
        return IWormhole.VM({
            version: 1,
            timestamp: uint32(block.timestamp),
            nonce: 0,
            emitterChainId: wormhole.governanceChainId(),
            emitterAddress: wormhole.governanceContract(),
            sequence: 0,
            consistencyLevel: 200,
            payload: payload,
            guardianSetIndex: 0,
            signatures: new IWormhole.Signature[](0),
            hash: bytes32("")
        });
    }

    function test_invalidModule() public {
        bytes32 coreBridgeModule =
            0x00000000000000000000000000000000000000000000000000000000436f7265;
        bytes memory restOfPayload =
            "0x0100022e234dae75c793f67a35089c9d99245e1c58470bf62849f9a0b5bf2913b396098f7c7019b51a820a000471cd25f9";
        bytes memory badModulePayload = abi.encodePacked(coreBridgeModule, restOfPayload);

        vm.expectRevert(abi.encodeWithSignature("InvalidModule(bytes32)", coreBridgeModule));
        governance.parseGeneralPurposeGovernanceMessage(badModulePayload);
    }

    // TODO: this should ideally test all actions that != 1
    function test_invalidAction() public {
        uint16 thisChain = wormhole.chainId();

        bytes memory signed = buildGovernanceVaa(
            uint8(Governance.GovernanceAction.UNDEFINED),
            thisChain,
            address(governance),
            address(myContract),
            abi.encodeWithSignature("governanceStuff()")
        );

        vm.expectRevert(abi.encodeWithSignature("InvalidAction(uint8)", 0));
        governance.performGovernance(signed);
    }

    // TODO: this should ideally test all chainIds that != wormhole.chainId()
    function test_invalidChain() public {
        bytes memory signed = buildGovernanceVaa(
            uint8(Governance.GovernanceAction.EVM_CALL),
            0,
            address(governance),
            address(myContract),
            abi.encodeWithSignature("governanceStuff()")
        );

        vm.expectRevert(abi.encodeWithSignature("NotRecipientChain(uint16)", 0));
        governance.performGovernance(signed);
    }

    // TODO: this should ideally test lots of address possibilities
    function test_invalidRecipientContract() public {
        uint16 thisChain = wormhole.chainId();
        address random = address(0x1234);

        bytes memory signed = buildGovernanceVaa(
            uint8(Governance.GovernanceAction.EVM_CALL),
            thisChain,
            random,
            address(myContract),
            abi.encodeWithSignature("governanceStuff()")
        );

        vm.expectRevert(abi.encodeWithSignature("NotRecipientContract(address)", random));
        governance.performGovernance(signed);
    }

    function test_governanceCallFailure() public {
        uint16 thisChain = wormhole.chainId();

        bytes memory signed = buildGovernanceVaa(
            uint8(Governance.GovernanceAction.EVM_CALL),
            thisChain,
            address(governance),
            address(myContract),
            abi.encodeWithSignature("governanceRevert()")
        );

        vm.expectRevert(abi.encodeWithSignature("RandomError()"));
        governance.performGovernance(signed);
    }

    function test_governance() public {
        uint16 thisChain = wormhole.chainId();

        bytes memory signed = buildGovernanceVaa(
            uint8(Governance.GovernanceAction.EVM_CALL),
            thisChain,
            address(governance),
            address(myContract),
            abi.encodeWithSignature("governanceStuff()")
        );

        governance.performGovernance(signed);

        assert(myContract.governanceStuffCalled());
    }

    function test_transferOwnership() public {
        address newOwner = address(0x1234);
        uint16 thisChain = wormhole.chainId();

        bytes memory signed = buildGovernanceVaa(
            uint8(Governance.GovernanceAction.EVM_CALL),
            thisChain,
            address(governance),
            address(myContract),
            abi.encodeWithSignature("transferOwnership(address)", newOwner)
        );

        governance.performGovernance(signed);

        vm.prank(newOwner);
        myContract.governanceStuff();

        assert(myContract.governanceStuffCalled());
    }
}
