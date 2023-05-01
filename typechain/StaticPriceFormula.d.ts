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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface StaticPriceFormulaInterface extends ethers.utils.Interface {
  functions: {
    "PRECISION()": FunctionFragment;
    "STATIC_PRICE()": FunctionFragment;
    "calculatePurchaseReturn(uint256,uint256,uint32,uint256)": FunctionFragment;
    "calculateSaleReturn(uint256,uint256,uint32,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "STATIC_PRICE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculatePurchaseReturn",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateSaleReturn",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "STATIC_PRICE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculatePurchaseReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateSaleReturn",
    data: BytesLike
  ): Result;

  events: {};
}

export class StaticPriceFormula extends BaseContract {
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

  interface: StaticPriceFormulaInterface;

  functions: {
    PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    STATIC_PRICE(overrides?: CallOverrides): Promise<[BigNumber]>;

    calculatePurchaseReturn(
      _supply: BigNumberish,
      _connectorBalance: BigNumberish,
      _connectorWeight: BigNumberish,
      _depositAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateSaleReturn(
      _supply: BigNumberish,
      _connectorBalance: BigNumberish,
      _connectorWeight: BigNumberish,
      _sellAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  STATIC_PRICE(overrides?: CallOverrides): Promise<BigNumber>;

  calculatePurchaseReturn(
    _supply: BigNumberish,
    _connectorBalance: BigNumberish,
    _connectorWeight: BigNumberish,
    _depositAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateSaleReturn(
    _supply: BigNumberish,
    _connectorBalance: BigNumberish,
    _connectorWeight: BigNumberish,
    _sellAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    STATIC_PRICE(overrides?: CallOverrides): Promise<BigNumber>;

    calculatePurchaseReturn(
      _supply: BigNumberish,
      _connectorBalance: BigNumberish,
      _connectorWeight: BigNumberish,
      _depositAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSaleReturn(
      _supply: BigNumberish,
      _connectorBalance: BigNumberish,
      _connectorWeight: BigNumberish,
      _sellAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    STATIC_PRICE(overrides?: CallOverrides): Promise<BigNumber>;

    calculatePurchaseReturn(
      _supply: BigNumberish,
      _connectorBalance: BigNumberish,
      _connectorWeight: BigNumberish,
      _depositAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSaleReturn(
      _supply: BigNumberish,
      _connectorBalance: BigNumberish,
      _connectorWeight: BigNumberish,
      _sellAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STATIC_PRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculatePurchaseReturn(
      _supply: BigNumberish,
      _connectorBalance: BigNumberish,
      _connectorWeight: BigNumberish,
      _depositAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateSaleReturn(
      _supply: BigNumberish,
      _connectorBalance: BigNumberish,
      _connectorWeight: BigNumberish,
      _sellAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
