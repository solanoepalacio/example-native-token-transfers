/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BytesParsing, BytesParsingInterface } from "../BytesParsing";

const _abi = [
  {
    type: "error",
    name: "InvalidBoolVal",
    inputs: [
      {
        name: "val",
        type: "uint8",
        internalType: "uint8",
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
  {
    type: "error",
    name: "OutOfBounds",
    inputs: [
      {
        name: "offset",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "length",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
] as const;

const _bytecode =
  "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea264697066735822122025f915d3064da8f9684a2e50500eaaf22034480673073a2384d1eb98d562b38064736f6c63430008130033";

type BytesParsingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BytesParsingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BytesParsing__factory extends ContractFactory {
  constructor(...args: BytesParsingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<BytesParsing> {
    return super.deploy(overrides || {}) as Promise<BytesParsing>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BytesParsing {
    return super.attach(address) as BytesParsing;
  }
  override connect(signer: Signer): BytesParsing__factory {
    return super.connect(signer) as BytesParsing__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BytesParsingInterface {
    return new utils.Interface(_abi) as BytesParsingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BytesParsing {
    return new Contract(address, _abi, signerOrProvider) as BytesParsing;
  }
}
