/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IWormholeRelayerDelivery,
  IWormholeRelayerDeliveryInterface,
} from "../../IWormholeRelayer.sol/IWormholeRelayerDelivery";

const _abi = [
  {
    type: "function",
    name: "deliver",
    inputs: [
      {
        name: "encodedVMs",
        type: "bytes[]",
        internalType: "bytes[]",
      },
      {
        name: "encodedDeliveryVAA",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "relayerRefundAddress",
        type: "address",
        internalType: "address payable",
      },
      {
        name: "deliveryOverrides",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "deliveryAttempted",
    inputs: [
      {
        name: "deliveryHash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "attempted",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "deliveryFailureBlock",
    inputs: [
      {
        name: "deliveryHash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "blockNumber",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "deliverySuccessBlock",
    inputs: [
      {
        name: "deliveryHash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "blockNumber",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRegisteredWormholeRelayerContract",
    inputs: [
      {
        name: "chainId",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "Delivery",
    inputs: [
      {
        name: "recipientContract",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "sourceChain",
        type: "uint16",
        indexed: true,
        internalType: "uint16",
      },
      {
        name: "sequence",
        type: "uint64",
        indexed: true,
        internalType: "uint64",
      },
      {
        name: "deliveryVaaHash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
      {
        name: "status",
        type: "uint8",
        indexed: false,
        internalType: "enum IWormholeRelayerDelivery.DeliveryStatus",
      },
      {
        name: "gasUsed",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "refundStatus",
        type: "uint8",
        indexed: false,
        internalType: "enum IWormholeRelayerDelivery.RefundStatus",
      },
      {
        name: "additionalStatusInfo",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "overridesInfo",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SendEvent",
    inputs: [
      {
        name: "sequence",
        type: "uint64",
        indexed: true,
        internalType: "uint64",
      },
      {
        name: "deliveryQuote",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "paymentForExtraReceiverValue",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
] as const;

export class IWormholeRelayerDelivery__factory {
  static readonly abi = _abi;
  static createInterface(): IWormholeRelayerDeliveryInterface {
    return new utils.Interface(_abi) as IWormholeRelayerDeliveryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IWormholeRelayerDelivery {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IWormholeRelayerDelivery;
  }
}
