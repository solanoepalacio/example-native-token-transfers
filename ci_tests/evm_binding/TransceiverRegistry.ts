/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface TransceiverRegistryInterface extends utils.Interface {
  functions: {
    "getTransceivers()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "getTransceivers"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getTransceivers",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getTransceivers",
    data: BytesLike
  ): Result;

  events: {
    "TransceiverAdded(address)": EventFragment;
    "TransceiverRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TransceiverAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransceiverRemoved"): EventFragment;
}

export interface TransceiverAddedEventObject {
  transceiver: string;
}
export type TransceiverAddedEvent = TypedEvent<
  [string],
  TransceiverAddedEventObject
>;

export type TransceiverAddedEventFilter =
  TypedEventFilter<TransceiverAddedEvent>;

export interface TransceiverRemovedEventObject {
  transceiver: string;
}
export type TransceiverRemovedEvent = TypedEvent<
  [string],
  TransceiverRemovedEventObject
>;

export type TransceiverRemovedEventFilter =
  TypedEventFilter<TransceiverRemovedEvent>;

export interface TransceiverRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TransceiverRegistryInterface;

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
    getTransceivers(
      overrides?: CallOverrides
    ): Promise<[string[]] & { result: string[] }>;
  };

  getTransceivers(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    getTransceivers(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {
    "TransceiverAdded(address)"(
      transceiver?: null
    ): TransceiverAddedEventFilter;
    TransceiverAdded(transceiver?: null): TransceiverAddedEventFilter;

    "TransceiverRemoved(address)"(
      transceiver?: null
    ): TransceiverRemovedEventFilter;
    TransceiverRemoved(transceiver?: null): TransceiverRemovedEventFilter;
  };

  estimateGas: {
    getTransceivers(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getTransceivers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
