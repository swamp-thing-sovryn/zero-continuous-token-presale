/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IKernelInterface extends ethers.utils.Interface {
  functions: {
    "getRecoveryVault()": FunctionFragment;
    "allowRecoverability(address)": FunctionFragment;
    "transferToVault(address)": FunctionFragment;
    "setApp(bytes32,bytes32,address)": FunctionFragment;
    "getApp(bytes32,bytes32)": FunctionFragment;
    "acl()": FunctionFragment;
    "hasPermission(address,address,bytes32,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getRecoveryVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowRecoverability",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferToVault",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setApp",
    values: [BytesLike, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getApp",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "acl", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hasPermission",
    values: [string, string, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getRecoveryVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowRecoverability",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferToVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setApp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getApp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "acl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasPermission",
    data: BytesLike
  ): Result;

  events: {
    "RecoverToVault(address,address,uint256)": EventFragment;
    "SetApp(bytes32,bytes32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RecoverToVault"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetApp"): EventFragment;
}

export class IKernel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IKernelInterface;

  functions: {
    getRecoveryVault(overrides?: CallOverrides): Promise<[string]>;

    allowRecoverability(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferToVault(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApp(
      namespace: BytesLike,
      appId: BytesLike,
      app: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getApp(
      namespace: BytesLike,
      appId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    acl(overrides?: CallOverrides): Promise<[string]>;

    hasPermission(
      who: string,
      where: string,
      what: BytesLike,
      how: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  getRecoveryVault(overrides?: CallOverrides): Promise<string>;

  allowRecoverability(
    token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferToVault(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApp(
    namespace: BytesLike,
    appId: BytesLike,
    app: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getApp(
    namespace: BytesLike,
    appId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  acl(overrides?: CallOverrides): Promise<string>;

  hasPermission(
    who: string,
    where: string,
    what: BytesLike,
    how: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    getRecoveryVault(overrides?: CallOverrides): Promise<string>;

    allowRecoverability(
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferToVault(token: string, overrides?: CallOverrides): Promise<void>;

    setApp(
      namespace: BytesLike,
      appId: BytesLike,
      app: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getApp(
      namespace: BytesLike,
      appId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    acl(overrides?: CallOverrides): Promise<string>;

    hasPermission(
      who: string,
      where: string,
      what: BytesLike,
      how: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    RecoverToVault(
      vault?: string | null,
      token?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { vault: string; token: string; amount: BigNumber }
    >;

    SetApp(
      namespace?: BytesLike | null,
      appId?: BytesLike | null,
      app?: null
    ): TypedEventFilter<
      [string, string, string],
      { namespace: string; appId: string; app: string }
    >;
  };

  estimateGas: {
    getRecoveryVault(overrides?: CallOverrides): Promise<BigNumber>;

    allowRecoverability(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferToVault(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApp(
      namespace: BytesLike,
      appId: BytesLike,
      app: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getApp(
      namespace: BytesLike,
      appId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    acl(overrides?: CallOverrides): Promise<BigNumber>;

    hasPermission(
      who: string,
      where: string,
      what: BytesLike,
      how: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRecoveryVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowRecoverability(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferToVault(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApp(
      namespace: BytesLike,
      appId: BytesLike,
      app: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getApp(
      namespace: BytesLike,
      appId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    acl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasPermission(
      who: string,
      where: string,
      what: BytesLike,
      how: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
