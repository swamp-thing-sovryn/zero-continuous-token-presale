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

interface IVaultRecoverableInterface extends ethers.utils.Interface {
  functions: {
    "getRecoveryVault()": FunctionFragment;
    "allowRecoverability(address)": FunctionFragment;
    "transferToVault(address)": FunctionFragment;
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

  events: {
    "RecoverToVault(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RecoverToVault"): EventFragment;
}

export class IVaultRecoverable extends BaseContract {
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

  interface: IVaultRecoverableInterface;

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

  callStatic: {
    getRecoveryVault(overrides?: CallOverrides): Promise<string>;

    allowRecoverability(
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferToVault(token: string, overrides?: CallOverrides): Promise<void>;
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
  };
}
