/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestTransceiverStructs,
  TestTransceiverStructsInterface,
} from "../../TransceiverStructs.t.sol/TestTransceiverStructs";

const _abi = [
  {
    type: "function",
    name: "IS_TEST",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "excludeArtifacts",
    inputs: [],
    outputs: [
      {
        name: "excludedArtifacts_",
        type: "string[]",
        internalType: "string[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "excludeContracts",
    inputs: [],
    outputs: [
      {
        name: "excludedContracts_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "excludeSenders",
    inputs: [],
    outputs: [
      {
        name: "excludedSenders_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "failed",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "targetArtifactSelectors",
    inputs: [],
    outputs: [
      {
        name: "targetedArtifactSelectors_",
        type: "tuple[]",
        internalType: "struct StdInvariant.FuzzSelector[]",
        components: [
          {
            name: "addr",
            type: "address",
            internalType: "address",
          },
          {
            name: "selectors",
            type: "bytes4[]",
            internalType: "bytes4[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetArtifacts",
    inputs: [],
    outputs: [
      {
        name: "targetedArtifacts_",
        type: "string[]",
        internalType: "string[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetContracts",
    inputs: [],
    outputs: [
      {
        name: "targetedContracts_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetInterfaces",
    inputs: [],
    outputs: [
      {
        name: "targetedInterfaces_",
        type: "tuple[]",
        internalType: "struct StdInvariant.FuzzInterface[]",
        components: [
          {
            name: "addr",
            type: "address",
            internalType: "address",
          },
          {
            name: "artifacts",
            type: "string[]",
            internalType: "string[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetSelectors",
    inputs: [],
    outputs: [
      {
        name: "targetedSelectors_",
        type: "tuple[]",
        internalType: "struct StdInvariant.FuzzSelector[]",
        components: [
          {
            name: "addr",
            type: "address",
            internalType: "address",
          },
          {
            name: "selectors",
            type: "bytes4[]",
            internalType: "bytes4[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetSenders",
    inputs: [],
    outputs: [
      {
        name: "targetedSenders_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "test_SerdeJunk_NativeTokenTransfer",
    inputs: [
      {
        name: "m",
        type: "tuple",
        internalType: "struct TransceiverStructs.NativeTokenTransfer",
        components: [
          {
            name: "amount",
            type: "tuple",
            internalType: "struct TrimmedAmount",
            components: [
              {
                name: "amount",
                type: "uint64",
                internalType: "uint64",
              },
              {
                name: "decimals",
                type: "uint8",
                internalType: "uint8",
              },
            ],
          },
          {
            name: "sourceToken",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "to",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "toChain",
            type: "uint16",
            internalType: "uint16",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "test_SerdeJunk_NttManagerMessage",
    inputs: [
      {
        name: "m",
        type: "tuple",
        internalType: "struct TransceiverStructs.NttManagerMessage",
        components: [
          {
            name: "sequence",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "sender",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "payload",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "test_SerdeRoundtrip_NativeTokenTransfer",
    inputs: [
      {
        name: "m",
        type: "tuple",
        internalType: "struct TransceiverStructs.NativeTokenTransfer",
        components: [
          {
            name: "amount",
            type: "tuple",
            internalType: "struct TrimmedAmount",
            components: [
              {
                name: "amount",
                type: "uint64",
                internalType: "uint64",
              },
              {
                name: "decimals",
                type: "uint8",
                internalType: "uint8",
              },
            ],
          },
          {
            name: "sourceToken",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "to",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "toChain",
            type: "uint16",
            internalType: "uint16",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "test_SerdeRoundtrip_NttManagerMessage",
    inputs: [
      {
        name: "m",
        type: "tuple",
        internalType: "struct TransceiverStructs.NttManagerMessage",
        components: [
          {
            name: "sequence",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "sender",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "payload",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "test_serialize_TransceiverMessage",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "log",
    inputs: [
      {
        name: "",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_address",
    inputs: [
      {
        name: "",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_array",
    inputs: [
      {
        name: "val",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_array",
    inputs: [
      {
        name: "val",
        type: "int256[]",
        indexed: false,
        internalType: "int256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_array",
    inputs: [
      {
        name: "val",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_bytes",
    inputs: [
      {
        name: "",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_bytes32",
    inputs: [
      {
        name: "",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_int",
    inputs: [
      {
        name: "",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_address",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_array",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_array",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256[]",
        indexed: false,
        internalType: "int256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_array",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_bytes",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_bytes32",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_decimal_int",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
      {
        name: "decimals",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_decimal_uint",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "decimals",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_int",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_string",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_uint",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_string",
    inputs: [
      {
        name: "",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_uint",
    inputs: [
      {
        name: "",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "logs",
    inputs: [
      {
        name: "",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "IncorrectPrefix",
    inputs: [
      {
        name: "prefix",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
  },
  {
    type: "error",
    name: "LengthMismatch",
    inputs: [
      {
        name: "encodedLength",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "expectedLength",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
] as const;

const _bytecode =
  "0x6080806040523461002d57600160ff1981816007541617600755600b541617600b5561263b90816100338239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c806313a052ec146119505780631ed7831c146118d15780632ade38801461165c5780633c6edeb01461153c5780633e5e3c23146114bd5780633f7286f41461143e57806340b5f8211461128e57806366d9a9a01461111157806385226c8114610fe8578063916a17c614610d8d578063a3653be914610bce578063b5508aa914610a91578063ba414fa614610a6c578063ddcc21b114610181578063e20c9f71146100f25763fa7626d4146100cd57600080fd5b346100ef57806003193601126100ef57602060ff600754166040519015158152f35b80fd5b50346100ef57806003193601126100ef57604051601380548083529083526020808301937f66de8ffda797e3de9c05e8fc57b3bf0ec28a930d40b0d285d93c06501cf6a09092915b8282106101615761015d8561015181890382611c12565b60405191829182611d05565b0390f35b83546001600160a01b03168652948501946001938401939091019061013a565b50346100ef57806003193601126100ef576040519061019f82611b93565b6212d687825260076020830152604051916101b983611bc1565b8252635f77fd6760e11b6020830152637f75e57f60e11b60408084019190915260116060840152516315cfa3cb60e11b8152918183806101fc84600483016120a4565b038173__$93083e246e55d56d98f3df2872cd16bfd0$__5af4928315610a61578293610a45575b506040519261023184611bdc565b64367999a1018452664667921341234360c81b6020850152604080850191909152516311692f3760e31b815282818061026d87600483016120e9565b038173__$93083e246e55d56d98f3df2872cd16bfd0$__5af490811561091b576103419184918291610a2b575b506040516102a781611bf7565b828152604051916102b783611bc1565b650214a17d7d5f60d11b8352650214a17d5d5f60d11b60208401526040830152606082015260405180938192633906001d60e01b83526309945ff160e41b6004840152604060248401528051604484015260208101516064840152606061032d60408301516080608487015260c4860190611d6c565b9101518382036043190160a4850152611d6c565b038173__$93083e246e55d56d98f3df2872cd16bfd0$__5af490811561091b578391610a09575b506040519161010083018381106001600160401b038211176109f357604090815260c1808552694ca2ff880214a17d7d5f60b11b6020860152650214a17d5d5f60b11b918501919091526f79000000367999a1014667921341234360581b6060850152704f994e545407000000000012d687beeffa608085015262feebca606760f91b0160a0850152611100607f60f91b0160c085015260e08401859052825160019691036109e957845b8351811015610473576001600160f81b03198061043083876122eb565b51169061043d83886122eb565b51160361046a575b600019811461045657600101610413565b634e487b7160e01b86526011600452602486fd5b95508495610445565b5091949290925b1561095c575b506040519361048e85611bc1565b8385528360208601526060604086015260608501906060825263ffffffff60e01b600482015160e01b166309945ff160e41b81036109445750602481015186526044810151602087015261050661ffff60026104f08260468601511685612312565b929060408b01528183860101511691018361238a565b9252519080820361092657505082604061053e9501516040518096819263107383fb60e01b8352602060048401526024830190611d6c565b038173__$93083e246e55d56d98f3df2872cd16bfd0$__5af493841561091b5783946108f1575b50906105a391604051916105af8361058088602083016120e9565b0392610594601f1994858101875286611c12565b604051958691602083016120e9565b03838101865285611c12565b60019583518551146000146108dd57855b8451811015610620576001600160f81b0319806105dd83886122eb565b5116906105ea83896122eb565b511603610617575b6000198114610603576001016105c0565b634e487b7160e01b87526011600452602487fd5b965085966105f2565b5061065b936040929560a09497985b1561083e575b5050015160405180938192635399ded560e11b8352602060048401526024830190611d6c565b038173__$93083e246e55d56d98f3df2872cd16bfd0$__5af490811561083357926106be926106af6106ca9387966106a39891610805575b50604051978891602083016120a4565b03838101885287611c12565b604051938491602083016120a4565b03908101835282611c12565b60019280518251146000146107fc57825b815181101561073b576001600160f81b0319806106f883856122eb565b51169061070583866122eb565b511603610732575b600019811461071e576001016106db565b634e487b7160e01b84526011600452602484fd5b9350829361070d565b5091925b15610748578280f35b6107eb906000805160206125a6833981519152608060405160208152602360208201526000805160206125c683398151915260408201526265735d60e81b6060820152a160405192604084526107a060408501612215565b938085036020820152806107c46000805160206125e6833981519152968794611d6c565b0390a1604051918291604083526107dd60408401612232565b908382036020850152611d6c565b0390a16107f661224f565b38808280f35b9180935061073f565b610826915060a03d811161082c575b61081e8183611c12565b81019061219b565b38610693565b503d610814565b6040513d86823e3d90fd5b6108cb906000805160206125a68339815191526080865160208152602360208201526000805160206125c6833981519152888201526265735d60e81b6060820152a1845192858452610891868501612215565b938085036020820152806108b56000805160206125e6833981519152968794611d6c565b0390a184519182918683526107dd878401612232565b0390a16108d661224f565b3880610635565b85965061065b936040929560a0949761062f565b6105a392919450610913903d8086833e61090b8183611c12565b810190612132565b939091610565565b6040513d85823e3d90fd5b60449250604051916355c5b3e360e11b835260048301526024820152fd5b602490604051906356d2569d60e01b82526004820152fd5b6109d86107c4916000805160206125a6833981519152608060405160208152602360208201526000805160206125c683398151915260408201526265735d60e81b6060820152a1604051604081526109b660408201612215565b908082036020820152806000805160206125e68339815191529586938b611d6c565b0390a16109e361224f565b38610480565b919450918361047a565b634e487b7160e01b600052604160045260246000fd5b610a2591503d8085833e610a1d8183611c12565b81019061207f565b38610368565b610a3f91503d8084833e610a1d8183611c12565b3861029a565b610a5a9193503d8084833e610a1d8183611c12565b9138610223565b6040513d84823e3d90fd5b50346100ef57806003193601126100ef576020610a87611f55565b6040519015158152f35b50346100ef57806003193601126100ef57601754610aae81612023565b610abb6040519182611c12565b81815260209182820160176000527fc624b66cc0138b8fabc209247f72d758e1cf3343756d543badbf24212bed8c15906000905b838210610b04576040518061015d8782611ec3565b60405160009184549160019280841c908481168015610bc4575b8b83108114610bb0578284528b949392918115610b945750600114610b5b575b50610b4d816001960382611c12565b815201930191019091610aef565b60008881528481209650905b808210610b7d5750810183019450610b4d610b3e565b8654838301860152958501958b9490910190610b67565b60ff19168584015250151560051b810183019450610b4d610b3e565b634e487b7160e01b87526022600452602487fd5b91607f1691610b1e565b50346100ef57610c1281610be136611c4e565b8173__$93083e246e55d56d98f3df2872cd16bfd0$__91604051809581926311692f3760e31b8352600483016120e9565b0381845af4928315610a61578293610d71575b50610c2e612562565b90610c3c8451835190612582565b8451604051906020926355c5b3e360e11b848401526024830152604482015260448152610c6881611bc1565b737109709ecfa91a80626ff3989d68f67f5b1dd12d803b15610d6d57610caf869291839260405194858094819363f28dceb360e01b83528960048401526024830190611d6c565b03925af18015610d6257610d4a575b50610cff81610d21966040519581610cdf8893518092868087019101611d49565b8201610cf382518093868085019101611d49565b01038086520184611c12565b60405180958194829363107383fb60e01b845260048401526024830190611d6c565b03915af48015610a6157610d33575080f35b610d46903d8084833e61090b8183611c12565b5080f35b610d548591611bae565b610d5e5738610cbe565b8380fd5b6040513d87823e3d90fd5b8580fd5b610d869193503d8084833e610a1d8183611c12565b9138610c25565b50346100ef57806003193601126100ef57601a54610daa81612023565b90610db86040519283611c12565b808252601a8352827f057c384a7d1c54f3a1b2e5e67b2617b8224fdfd1ea7234eea573a6ff665ff63e602084015b838310610dfb576040518061015d8782611e0b565b604051610e0781611b93565b82546001600160a01b031681526040516001840180548083529089526020808a20908301918a915b816007840110610f7a5784600197946002979460209794610e92945491818110610f5e575b818110610f42575b818110610f26575b818110610f0a575b818110610eee575b818110610ed2575b818110610eb8575b10610ea4575b500382611c12565b83820152815201920192019190610de6565b6001600160e01b0319168152860138610e8a565b828a1b6001600160e01b0319168452928901928b01610e84565b604083901b6001600160e01b0319168452928901928b01610e7c565b606083901b6001600160e01b0319168452928901928b01610e74565b608083901b6001600160e01b0319168452928901928b01610e6c565b60a083901b6001600160e01b0319168452928901928b01610e64565b60c083901b6001600160e01b0319168452928901928b01610e5c565b60e083901b6001600160e01b0319168452928901928b01610e54565b926001610100600892865463ffffffff60e01b90818160e01b16835260c08282821b16602085015260a08383821b1660408601526080848460608282851b16818a01521b1690860152838360401b1690850152828260201b16908401521660e0820152019401920191610e2f565b50346100ef57806003193601126100ef5760185461100581612023565b6110126040519182611c12565b81815260209182820160186000527fb13d2d76d1f4b7be834882e410b3e3a8afaf69f83600ae24db354391d2378d2e906000905b83821061105b576040518061015d8782611ec3565b60405160009184549160019280841c908481168015611107575b8b83108114610bb0578284528b9493929181156110eb57506001146110b2575b506110a4816001960382611c12565b815201930191019091611046565b60008881528481209650905b8082106110d457508101830194506110a4611095565b8654838301860152958501958b94909101906110be565b60ff19168584015250151560051b8101830194506110a4611095565b91607f1691611075565b50346100ef57806003193601126100ef5760195461112e81612023565b9061113c6040519283611c12565b80825260198352827f944998273e477b495144fb8794c914197f3ccb46be2900f4698fd0ef743c9695602084015b83831061117f576040518061015d8782611e0b565b60405161118b81611b93565b82546001600160a01b031681526040516001840180548083529089526020808a20908301918a915b816007840110611220578460019794600297946020979461120e945491818110610f5e57818110610f4257818110610f2657818110610f0a57818110610eee57818110610ed257818110610eb85710610ea457500382611c12565b8382015281520192019201919061116a565b926001610100600892865463ffffffff60e01b90818160e01b16835260c08282821b16602085015260a08383821b1660408601526080848460608282851b16818a01521b1690860152838360401b1690850152828260201b16908401521660e08201520194019201916111b3565b50346100ef576112d16112a036611d91565b8273__$93083e246e55d56d98f3df2872cd16bfd0$__91604051809481926315cfa3cb60e11b8352600483016120a4565b0381845af491821561091b578392611422575b506112ed612562565b916112fb8151845190612582565b90848151604051906020946355c5b3e360e11b86840152602483015260448201526044815261132981611bc1565b737109709ecfa91a80626ff3989d68f67f5b1dd12d90813b1561141e57829161136f9160405194858094819363f28dceb360e01b83528a60048401526024830190611d6c565b03925af18015611413576113ef575b5091816113a46113c6959360a0956040519581610cdf8893518092868087019101611d49565b604051809581948293635399ded560e11b845260048401526024830190611d6c565b03915af48015610a61576113d8575080f35b610d469060a03d811161082c5761081e8183611c12565b916113a48160a09593976114066113c69896611bae565b979395509395505061137e565b6040513d88823e3d90fd5b8280fd5b6114379192503d8085833e610a1d8183611c12565b90386112e4565b50346100ef57806003193601126100ef57604051601580548083529083526020808301937f55f448fdea98c4d29eb340757ef0a66cd03dbb9538908a6a81d96026b71ec47592915b82821061149d5761015d8561015181890382611c12565b83546001600160a01b031686529485019460019384019390910190611486565b50346100ef57806003193601126100ef57604051601680548083529083526020808301937fd833147d7dc355ba459fc788f669e58cfaf9dc25ddcd0702e87d69c7b512428992915b82821061151c5761015d8561015181890382611c12565b83546001600160a01b031686529485019460019384019390910190611505565b50346100ef5761154b36611d91565b6040516315cfa3cb60e11b815273__$93083e246e55d56d98f3df2872cd16bfd0$__919083818061157f85600483016120a4565b0381865af48015610833576115bc9360a0928692611640575b506040518080968194635399ded560e11b8352602060048401526024830190611d6c565b03915af490811561091b5761161892849261161b575b50606080916115f26001600160401b0380835151169086515116906124b2565b61160560408201516040860151906123fe565b61ffff92839101511692015116906124b2565b80f35b6060919250611638829160a03d811161082c5761081e8183611c12565b9291506115d2565b6116559192503d8088833e610a1d8183611c12565b9038611598565b50346100ef57806003193601126100ef57601b549061167a82612023565b6116876040519182611c12565b828152602081018093601b84527f3ad8aa4f87544323a9d1e5dd902f40c356527a7955687113db5f9a85ad579dc184925b82841061178957858588604051916020830190602084525180915260408301600590604083831b860101939580925b8484106116f45786860387f35b9091929394603f198782030184528751906020604082019260018060a01b03815116835201519160406020830152825180915260609060208284019282871b850101940192865b82811061175e5750505050506020806001929901940194019296949391906116e7565b909192939460208061177c600193605f198782030189528951611d6c565b970195019392910161173b565b60405161179581611b93565b82546001600160a01b03168152600183018054906117b282612023565b916117c06040519384611c12565b80835260208301918a5260208a208a925b8284106117f75750505050600192826020928360029501528152019201930192906116b8565b60405182548d90600181811c91908116156118c7575b6020821060018216146118b2578184528f91906001811690811561188d5750600114611857575b50506001928261184985946020940382611c12565b8152019201930192906117d1565b909150848252602082205b81831061187757505081016020018d82611834565b6001816020925483868801015201920191611862565b60ff191660208681019190915291151560051b850190910192508f9150839050611834565b50634e487b7160e01b8f52602260045260248ffd5b90607f169061180d565b50346100ef57806003193601126100ef57604051601480548083529083526020808301937fce6d7b5282bd9a3661ae061feed1dbda4e52ab073b1f9285be6e155d9c38d4ec92915b8282106119305761015d8561015181890382611c12565b83546001600160a01b031686529485019460019384019390910190611919565b50346100ef5761195f36611c4e565b6040516311692f3760e31b815273__$93083e246e55d56d98f3df2872cd16bfd0$__9083818061199286600483016120e9565b0381855af4908115610833578491611b79575b506040519263107383fb60e01b8452848460209485600483015281806119d060249788830190611d6c565b03915af4938415610d62578594611b58575b5060408091611a006001600160401b038083511690885116906124b2565b611a118582015186880151906123fe565b015193015190600180918551845114600014611b4f5786825b611aec575b5050505b15611a3c578380f35b6000805160206125a683398151915260806040518481526023858201526000805160206125c683398151915260408201526265735d60e81b6060820152a16040519260408452611a8e60408501612215565b938085038482015280611ab16000805160206125e6833981519152968794611d6c565b0390a1611ada60405192839260408452611acd60408501612232565b9184830390850152611d6c565b0390a1611ae561224f565b3880808380f35b8651811015611b4a576001600160f81b031980611b09838a6122eb565b511690611b1683886122eb565b511603611b42575b6000198114611b2f57820182611a2a565b50634e487b7160e01b8752601160045286fd5b879350611b1e565b611a2f565b50505083611a33565b6040919450611b7182913d8089833e61090b8183611c12565b9491506119e2565b611b8d91503d8086833e610a1d8183611c12565b386119a5565b604081019081106001600160401b038211176109f357604052565b6001600160401b0381116109f357604052565b608081019081106001600160401b038211176109f357604052565b606081019081106001600160401b038211176109f357604052565b602081019081106001600160401b038211176109f357604052565b90601f801991011681019081106001600160401b038211176109f357604052565b6001600160401b0381116109f357601f01601f191660200190565b60031990602081830112611d0057600435916001600160401b0390818411611d00576060908484030112611d005760405192611c8984611bdc565b80600401358281168103611d00578452602481013560208501526044810135918211611d00570181602382011215611d0057600481013590611cca82611c33565b92611cd86040519485611c12565b82845260248383010111611d0057816000926024602093018386013783010152604082015290565b600080fd5b6020908160408183019282815285518094520193019160005b828110611d2c575050505090565b83516001600160a01b031685529381019392810192600101611d1e565b60005b838110611d5c5750506000910152565b8181015183820152602001611d4c565b90602091611d8581518092818552858086019101611d49565b601f01601f1916010190565b6003190160a08112611d00576040805191611dab83611bc1565b12611d0057604051611dbc81611b93565b6004356001600160401b0381168103611d0057815260243560ff81168103611d0057602082015281526044356020820152606435604082015260843561ffff81168103611d0057606082015290565b602080820190808352835180925260409283810182858560051b840101960194600080935b868510611e4257505050505050505090565b909192939480969798603f198382030186528951826060818885019360018060a01b038151168652015193888382015284518094520192019085905b808210611e9f5750505090806001929a019501950193969594929190611e30565b82516001600160e01b03191684528a94938401939092019160019190910190611e7e565b602080820190808352835180925260408301928160408460051b8301019501936000915b848310611ef75750505050505090565b9091929394958480611f15600193603f198682030187528a51611d6c565b9801930193019194939290611ee7565b3d15611f50573d90611f3682611c33565b91611f446040519384611c12565b82523d6000602084013e565b606090565b60075460081c60ff1615611f6f5760ff60075460081c1690565b600080737109709ecfa91a80626ff3989d68f67f5b1dd12d803b611f9257505090565b819060405182602082018381526519985a5b195960d21b604084015260408352611fbb83611bdc565b611ff360246040518093611fe36020830197630667f9d760e41b895251809285850190611d49565b8101036004810184520182611c12565b51925af150612000611f25565b60208180518101031261201f57602001519081151582036100ef575090565b5080fd5b6001600160401b0381116109f35760051b60200190565b81601f82011215611d0057805161205081611c33565b9261205e6040519485611c12565b81845260208284010111611d005761207c9160208085019101611d49565b90565b90602082820312611d005781516001600160401b038111611d005761207c920161203a565b919091608061ffff606060a084019560ff602082516001600160401b038151168852015116602086015260208101516040860152604081015182860152015116910152565b6080604061207c93602084526001600160401b0381511660208501526020810151828501520151916060808201520190611d6c565b51906001600160401b0382168203611d0057565b90602082820312611d005781516001600160401b0392838211611d00570190606082820312611d00576040519261216884611bdc565b6121718361211e565b8452602083015160208501526040830151908111611d0057612193920161203a565b604082015290565b8091039060a08212611d005760408051926121b584611bc1565b12611d0057604051906121c782611b93565b6121d08161211e565b825260208101519160ff83168303611d0057608092602082015283526040810151602084015260608101516040840152015161ffff81168103611d0057606082015290565b600a8152690808080808081319599d60b21b602082015260400190565b600a8152690808080808149a59da1d60b21b602082015260400190565b737109709ecfa91a80626ff3989d68f67f5b1dd12d803b61227d575b5061010061ff00196007541617600755565b6000809160405182602082018381526519985a5b195960d21b604084015260016060840152606083526122af83611bc1565b6122d760246040518093611fe360208301976370ca10bb60e01b895251809285850190611d49565b51925af1506122e4611f25565b503861226b565b9081518110156122fc570160200190565b634e487b7160e01b600052603260045260246000fd5b9091821561236c57826046019160405193601f8116918215612363575b6046838701938385019201015b8184106123535750508452601f01601f1916604052565b805184526020938401930161233c565b6020925061232f565b91505060405161237b81611bf7565b60008152600036813790604690565b929082156123e1578281019260405194601f82169283156123d8575b838701938385019201015b8184106123c85750508452601f01601f1916604052565b80518452602093840193016123b1565b602093506123a6565b925090506040516123f181611bf7565b6000815260003681379190565b9080820361240a575050565b61249f906040906000805160206125a68339815191526080835160208152602560208201526000805160206125c68339815191528582015264657333325d60d81b6060820152a1815193828552612462838601612215565b906020860152847fafb795c9c61e4fe7468c386f925d7a5429ecad9c0495ddb8d38d690614d32f999586920390a181519282849384528301612232565b9060208301520390a16124b061224f565b565b908082036124be575050565b61249f906040906000805160206125a68339815191526080835160208152602260208201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e8582015261745d60f01b6060820152a1815193828552612525838601612215565b906020860152847fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a89586920390a181519282849384528301612232565b6040519061256f82611b93565b60048252636a756e6b60e01b6020830152565b9190820180921161258f57565b634e487b7160e01b600052601160045260246000fdfe41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f504572726f723a2061203d3d2062206e6f7420736174697366696564205b627974d26e16cad4548705e4c9e2d94f98ee91c289085ee425594fd5635fa2964ccf18a26469706673582212203299611775137c2abd02c566a2a5ef010356734d3e41c5ddf50f710ad673838464736f6c63430008130033";

type TestTransceiverStructsConstructorParams =
  | [
      linkLibraryAddresses: TestTransceiverStructsLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestTransceiverStructsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class TestTransceiverStructs__factory extends ContractFactory {
  constructor(...args: TestTransceiverStructsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        TestTransceiverStructs__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: TestTransceiverStructsLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$93083e246e55d56d98f3df2872cd16bfd0\\$__", "g"),
      linkLibraryAddresses[
        "src/libraries/TransceiverStructs.sol:TransceiverStructs"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<TestTransceiverStructs> {
    return super.deploy(overrides || {}) as Promise<TestTransceiverStructs>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestTransceiverStructs {
    return super.attach(address) as TestTransceiverStructs;
  }
  override connect(signer: Signer): TestTransceiverStructs__factory {
    return super.connect(signer) as TestTransceiverStructs__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTransceiverStructsInterface {
    return new utils.Interface(_abi) as TestTransceiverStructsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestTransceiverStructs {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestTransceiverStructs;
  }
}

export interface TestTransceiverStructsLibraryAddresses {
  ["src/libraries/TransceiverStructs.sol:TransceiverStructs"]: string;
}