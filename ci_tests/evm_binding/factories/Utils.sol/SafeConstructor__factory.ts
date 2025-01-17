/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SafeConstructor,
  SafeConstructorInterface,
} from "../../Utils.sol/SafeConstructor";

const _abi = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "InvalidInitialization",
    inputs: [],
  },
  {
    type: "error",
    name: "NotInitializing",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x6080806040523460b2577ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a009081549060ff8260401c1660a357506001600160401b036002600160401b031982821601605f575b604051603a908160b88239f35b6001600160401b031990911681179091556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a13880806052565b63f92ee8a960e01b8152600490fd5b600080fdfe600080fdfea2646970667358221220d2e2ec823f32432799c62944bd3c0d2b27ea9e2f58e005678154a9b9680c68d164736f6c63430008130033";

type SafeConstructorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafeConstructorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafeConstructor__factory extends ContractFactory {
  constructor(...args: SafeConstructorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<SafeConstructor> {
    return super.deploy(overrides || {}) as Promise<SafeConstructor>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SafeConstructor {
    return super.attach(address) as SafeConstructor;
  }
  override connect(signer: Signer): SafeConstructor__factory {
    return super.connect(signer) as SafeConstructor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeConstructorInterface {
    return new utils.Interface(_abi) as SafeConstructorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeConstructor {
    return new Contract(address, _abi, signerOrProvider) as SafeConstructor;
  }
}
