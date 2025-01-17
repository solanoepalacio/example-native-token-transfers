/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IWormholeReceiver,
  IWormholeReceiverInterface,
} from "../IWormholeReceiver";

const _abi = [
  {
    type: "function",
    name: "receiveWormholeMessages",
    inputs: [
      {
        name: "payload",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "additionalMessages",
        type: "bytes[]",
        internalType: "bytes[]",
      },
      {
        name: "sourceAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "sourceChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "deliveryHash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
] as const;

export class IWormholeReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): IWormholeReceiverInterface {
    return new utils.Interface(_abi) as IWormholeReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IWormholeReceiver {
    return new Contract(address, _abi, signerOrProvider) as IWormholeReceiver;
  }
}
