/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AppStorage, AppStorageInterface } from "../AppStorage";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "appId",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "kernel",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061013c806100206000396000f30060806040526004361061004b5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166380afdea88114610050578063d4aae0c414610077575b600080fd5b34801561005c57600080fd5b506100656100b5565b60408051918252519081900360200190f35b34801561008357600080fd5b5061008c6100e5565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60006100e07fd625496217aa6a3453eecb9c3489dc5a53e6c67b444329ea2b2cbc9ff547639b61010c565b905090565b60006100e07f4172f0f7d2289153072b0a6ca36959e0cbe2efc3afe50fc81636caa96338137b5b54905600a165627a7a72305820dff9445537635758f3d68463fbf8b197a1bc21a70e6173de7912fa270a7161d50029";

export class AppStorage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AppStorage> {
    return super.deploy(overrides || {}) as Promise<AppStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AppStorage {
    return super.attach(address) as AppStorage;
  }
  connect(signer: Signer): AppStorage__factory {
    return super.connect(signer) as AppStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AppStorageInterface {
    return new utils.Interface(_abi) as AppStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AppStorage {
    return new Contract(address, _abi, signerOrProvider) as AppStorage;
  }
}
