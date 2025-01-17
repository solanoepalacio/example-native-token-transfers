/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRateLimiter, IRateLimiterInterface } from "../IRateLimiter";

const _abi = [
  {
    type: "function",
    name: "getCurrentInboundCapacity",
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
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getCurrentOutboundCapacity",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getInboundQueuedTransfer",
    inputs: [
      {
        name: "digest",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IRateLimiter.InboundQueuedTransfer",
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
            name: "txTimestamp",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "recipient",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getOutboundQueuedTransfer",
    inputs: [
      {
        name: "queueSequence",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IRateLimiter.OutboundQueuedTransfer",
        components: [
          {
            name: "recipient",
            type: "bytes32",
            internalType: "bytes32",
          },
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
            name: "txTimestamp",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "recipientChain",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "sender",
            type: "address",
            internalType: "address",
          },
          {
            name: "transceiverInstructions",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "error",
    name: "CapacityCannotExceedLimit",
    inputs: [
      {
        name: "newCurrentCapacity",
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
        name: "newLimit",
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
    ],
  },
  {
    type: "error",
    name: "InboundQueuedTransferNotFound",
    inputs: [
      {
        name: "digest",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
  },
  {
    type: "error",
    name: "InboundQueuedTransferStillQueued",
    inputs: [
      {
        name: "digest",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "transferTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "NotEnoughCapacity",
    inputs: [
      {
        name: "currentCapacity",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "OutboundQueuedTransferNotFound",
    inputs: [
      {
        name: "queueSequence",
        type: "uint64",
        internalType: "uint64",
      },
    ],
  },
  {
    type: "error",
    name: "OutboundQueuedTransferStillQueued",
    inputs: [
      {
        name: "queueSequence",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "transferTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
] as const;

export class IRateLimiter__factory {
  static readonly abi = _abi;
  static createInterface(): IRateLimiterInterface {
    return new utils.Interface(_abi) as IRateLimiterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRateLimiter {
    return new Contract(address, _abi, signerOrProvider) as IRateLimiter;
  }
}
