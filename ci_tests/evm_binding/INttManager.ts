/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace TransceiverStructs {
  export type NttManagerMessageStruct = {
    sequence: BigNumberish;
    sender: BytesLike;
    payload: BytesLike;
  };

  export type NttManagerMessageStructOutput = [BigNumber, string, string] & {
    sequence: BigNumber;
    sender: string;
    payload: string;
  };

  export type TransceiverInstructionStruct = {
    index: BigNumberish;
    payload: BytesLike;
  };

  export type TransceiverInstructionStructOutput = [number, string] & {
    index: number;
    payload: string;
  };
}

export interface INttManagerInterface extends utils.Interface {
  functions: {
    "attestationReceived(uint16,bytes32,(uint64,bytes32,bytes))": FunctionFragment;
    "completeInboundQueuedTransfer(bytes32)": FunctionFragment;
    "completeOutboundQueuedTransfer(uint64)": FunctionFragment;
    "getMode()": FunctionFragment;
    "getPeer(uint16)": FunctionFragment;
    "isMessageApproved(bytes32)": FunctionFragment;
    "isMessageExecuted(bytes32)": FunctionFragment;
    "nextMessageSequence()": FunctionFragment;
    "quoteDeliveryPrice(uint16,(uint8,bytes)[],address[])": FunctionFragment;
    "setInboundLimit(uint256,uint16)": FunctionFragment;
    "setOutboundLimit(uint256)": FunctionFragment;
    "setPeer(uint16,bytes32)": FunctionFragment;
    "token()": FunctionFragment;
    "tokenDecimals()": FunctionFragment;
    "transfer(uint256,uint16,bytes32,bool,bytes)": FunctionFragment;
    "upgrade(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "attestationReceived"
      | "completeInboundQueuedTransfer"
      | "completeOutboundQueuedTransfer"
      | "getMode"
      | "getPeer"
      | "isMessageApproved"
      | "isMessageExecuted"
      | "nextMessageSequence"
      | "quoteDeliveryPrice"
      | "setInboundLimit"
      | "setOutboundLimit"
      | "setPeer"
      | "token"
      | "tokenDecimals"
      | "transfer"
      | "upgrade"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "attestationReceived",
    values: [
      BigNumberish,
      BytesLike,
      TransceiverStructs.NttManagerMessageStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "completeInboundQueuedTransfer",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "completeOutboundQueuedTransfer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getMode", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPeer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isMessageApproved",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isMessageExecuted",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "nextMessageSequence",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "quoteDeliveryPrice",
    values: [
      BigNumberish,
      TransceiverStructs.TransceiverInstructionStruct[],
      string[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setInboundLimit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setOutboundLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPeer",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenDecimals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [BigNumberish, BigNumberish, BytesLike, boolean, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "upgrade", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "attestationReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "completeInboundQueuedTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "completeOutboundQueuedTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getMode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPeer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isMessageApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isMessageExecuted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextMessageSequence",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteDeliveryPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInboundLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOutboundLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPeer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;

  events: {};
}

export interface INttManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: INttManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    attestationReceived(
      sourceChainId: BigNumberish,
      sourceNttManagerAddress: BytesLike,
      payload: TransceiverStructs.NttManagerMessageStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    completeInboundQueuedTransfer(
      digest: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    completeOutboundQueuedTransfer(
      queueSequence: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    getMode(overrides?: CallOverrides): Promise<[number]>;

    getPeer(
      chainId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isMessageApproved(
      digest: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isMessageExecuted(
      digest: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    nextMessageSequence(overrides?: CallOverrides): Promise<[BigNumber]>;

    quoteDeliveryPrice(
      recipientChain: BigNumberish,
      transceiverInstructions: TransceiverStructs.TransceiverInstructionStruct[],
      enabledTransceivers: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber]>;

    setInboundLimit(
      limit: BigNumberish,
      chainId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setOutboundLimit(
      limit: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setPeer(
      peerChainId: BigNumberish,
      peerContract: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    tokenDecimals(overrides?: CallOverrides): Promise<[number]>;

    transfer(
      amount: BigNumberish,
      recipientChain: BigNumberish,
      recipient: BytesLike,
      shouldQueue: boolean,
      encodedInstructions: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    upgrade(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  attestationReceived(
    sourceChainId: BigNumberish,
    sourceNttManagerAddress: BytesLike,
    payload: TransceiverStructs.NttManagerMessageStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  completeInboundQueuedTransfer(
    digest: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  completeOutboundQueuedTransfer(
    queueSequence: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  getMode(overrides?: CallOverrides): Promise<number>;

  getPeer(chainId_: BigNumberish, overrides?: CallOverrides): Promise<string>;

  isMessageApproved(
    digest: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isMessageExecuted(
    digest: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  nextMessageSequence(overrides?: CallOverrides): Promise<BigNumber>;

  quoteDeliveryPrice(
    recipientChain: BigNumberish,
    transceiverInstructions: TransceiverStructs.TransceiverInstructionStruct[],
    enabledTransceivers: string[],
    overrides?: CallOverrides
  ): Promise<[BigNumber[], BigNumber]>;

  setInboundLimit(
    limit: BigNumberish,
    chainId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setOutboundLimit(
    limit: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setPeer(
    peerChainId: BigNumberish,
    peerContract: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  tokenDecimals(overrides?: CallOverrides): Promise<number>;

  transfer(
    amount: BigNumberish,
    recipientChain: BigNumberish,
    recipient: BytesLike,
    shouldQueue: boolean,
    encodedInstructions: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  upgrade(
    newImplementation: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    attestationReceived(
      sourceChainId: BigNumberish,
      sourceNttManagerAddress: BytesLike,
      payload: TransceiverStructs.NttManagerMessageStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    completeInboundQueuedTransfer(
      digest: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    completeOutboundQueuedTransfer(
      queueSequence: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMode(overrides?: CallOverrides): Promise<number>;

    getPeer(chainId_: BigNumberish, overrides?: CallOverrides): Promise<string>;

    isMessageApproved(
      digest: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isMessageExecuted(
      digest: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    nextMessageSequence(overrides?: CallOverrides): Promise<BigNumber>;

    quoteDeliveryPrice(
      recipientChain: BigNumberish,
      transceiverInstructions: TransceiverStructs.TransceiverInstructionStruct[],
      enabledTransceivers: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber]>;

    setInboundLimit(
      limit: BigNumberish,
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOutboundLimit(
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPeer(
      peerChainId: BigNumberish,
      peerContract: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    tokenDecimals(overrides?: CallOverrides): Promise<number>;

    transfer(
      amount: BigNumberish,
      recipientChain: BigNumberish,
      recipient: BytesLike,
      shouldQueue: boolean,
      encodedInstructions: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upgrade(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    attestationReceived(
      sourceChainId: BigNumberish,
      sourceNttManagerAddress: BytesLike,
      payload: TransceiverStructs.NttManagerMessageStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    completeInboundQueuedTransfer(
      digest: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    completeOutboundQueuedTransfer(
      queueSequence: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    getMode(overrides?: CallOverrides): Promise<BigNumber>;

    getPeer(
      chainId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isMessageApproved(
      digest: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isMessageExecuted(
      digest: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nextMessageSequence(overrides?: CallOverrides): Promise<BigNumber>;

    quoteDeliveryPrice(
      recipientChain: BigNumberish,
      transceiverInstructions: TransceiverStructs.TransceiverInstructionStruct[],
      enabledTransceivers: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setInboundLimit(
      limit: BigNumberish,
      chainId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setOutboundLimit(
      limit: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setPeer(
      peerChainId: BigNumberish,
      peerContract: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    tokenDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      amount: BigNumberish,
      recipientChain: BigNumberish,
      recipient: BytesLike,
      shouldQueue: boolean,
      encodedInstructions: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    upgrade(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    attestationReceived(
      sourceChainId: BigNumberish,
      sourceNttManagerAddress: BytesLike,
      payload: TransceiverStructs.NttManagerMessageStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    completeInboundQueuedTransfer(
      digest: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    completeOutboundQueuedTransfer(
      queueSequence: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getMode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPeer(
      chainId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isMessageApproved(
      digest: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isMessageExecuted(
      digest: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextMessageSequence(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quoteDeliveryPrice(
      recipientChain: BigNumberish,
      transceiverInstructions: TransceiverStructs.TransceiverInstructionStruct[],
      enabledTransceivers: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setInboundLimit(
      limit: BigNumberish,
      chainId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setOutboundLimit(
      limit: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setPeer(
      peerChainId: BigNumberish,
      peerContract: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      amount: BigNumberish,
      recipientChain: BigNumberish,
      recipient: BytesLike,
      shouldQueue: boolean,
      encodedInstructions: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    upgrade(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
