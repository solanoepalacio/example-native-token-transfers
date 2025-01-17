/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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
} from "../common";

export declare namespace VmSafe {
  export type ChainInfoStruct = { forkId: BigNumberish; chainId: BigNumberish };

  export type ChainInfoStructOutput = [BigNumber, BigNumber] & {
    forkId: BigNumber;
    chainId: BigNumber;
  };

  export type StorageAccessStruct = {
    account: string;
    slot: BytesLike;
    isWrite: boolean;
    previousValue: BytesLike;
    newValue: BytesLike;
    reverted: boolean;
  };

  export type StorageAccessStructOutput = [
    string,
    string,
    boolean,
    string,
    string,
    boolean
  ] & {
    account: string;
    slot: string;
    isWrite: boolean;
    previousValue: string;
    newValue: string;
    reverted: boolean;
  };

  export type AccountAccessStruct = {
    chainInfo: VmSafe.ChainInfoStruct;
    kind: BigNumberish;
    account: string;
    accessor: string;
    initialized: boolean;
    oldBalance: BigNumberish;
    newBalance: BigNumberish;
    deployedCode: BytesLike;
    value: BigNumberish;
    data: BytesLike;
    reverted: boolean;
    storageAccesses: VmSafe.StorageAccessStruct[];
  };

  export type AccountAccessStructOutput = [
    VmSafe.ChainInfoStructOutput,
    number,
    string,
    string,
    boolean,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    boolean,
    VmSafe.StorageAccessStructOutput[]
  ] & {
    chainInfo: VmSafe.ChainInfoStructOutput;
    kind: number;
    account: string;
    accessor: string;
    initialized: boolean;
    oldBalance: BigNumber;
    newBalance: BigNumber;
    deployedCode: string;
    value: BigNumber;
    data: string;
    reverted: boolean;
    storageAccesses: VmSafe.StorageAccessStructOutput[];
  };

  export type LogStruct = {
    topics: BytesLike[];
    data: BytesLike;
    emitter: string;
  };

  export type LogStructOutput = [string[], string, string] & {
    topics: string[];
    data: string;
    emitter: string;
  };
}

export interface UtilsInterface extends utils.Interface {
  functions: {
    "assertSafeUpgradeableConstructor(((uint256,uint256),uint8,address,address,bool,uint256,uint256,bytes,uint256,bytes,bool,(address,bytes32,bool,bytes32,bytes32,bool)[])[])": FunctionFragment;
    "fetchQueuedTransferDigestsFromLogs((bytes32[],bytes,address)[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "assertSafeUpgradeableConstructor"
      | "fetchQueuedTransferDigestsFromLogs"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "assertSafeUpgradeableConstructor",
    values: [VmSafe.AccountAccessStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "fetchQueuedTransferDigestsFromLogs",
    values: [VmSafe.LogStruct[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "assertSafeUpgradeableConstructor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fetchQueuedTransferDigestsFromLogs",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Utils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UtilsInterface;

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
    assertSafeUpgradeableConstructor(
      accesses: VmSafe.AccountAccessStruct[],
      overrides?: CallOverrides
    ): Promise<[void]>;

    fetchQueuedTransferDigestsFromLogs(
      logs: VmSafe.LogStruct[],
      overrides?: CallOverrides
    ): Promise<[string[]]>;
  };

  assertSafeUpgradeableConstructor(
    accesses: VmSafe.AccountAccessStruct[],
    overrides?: CallOverrides
  ): Promise<void>;

  fetchQueuedTransferDigestsFromLogs(
    logs: VmSafe.LogStruct[],
    overrides?: CallOverrides
  ): Promise<string[]>;

  callStatic: {
    assertSafeUpgradeableConstructor(
      accesses: VmSafe.AccountAccessStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    fetchQueuedTransferDigestsFromLogs(
      logs: VmSafe.LogStruct[],
      overrides?: CallOverrides
    ): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    assertSafeUpgradeableConstructor(
      accesses: VmSafe.AccountAccessStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fetchQueuedTransferDigestsFromLogs(
      logs: VmSafe.LogStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assertSafeUpgradeableConstructor(
      accesses: VmSafe.AccountAccessStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fetchQueuedTransferDigestsFromLogs(
      logs: VmSafe.LogStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
