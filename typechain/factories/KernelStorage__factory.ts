/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KernelStorage, KernelStorageInterface } from "../KernelStorage";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "bytes32",
      },
      {
        name: "",
        type: "bytes32",
      },
    ],
    name: "apps",
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
  {
    constant: true,
    inputs: [],
    name: "recoveryVaultAppId",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610114806100206000396000f30060806040526004361060485763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416634558850c8114604d57806386070cfe14608e575b600080fd5b348015605857600080fd5b50606560043560243560b2565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b348015609957600080fd5b5060a060e2565b60408051918252519081900360200190f35b600060208181529281526040808220909352908152205473ffffffffffffffffffffffffffffffffffffffff1681565b600154815600a165627a7a7230582010fe44a775ebd154456773a0f2075fde63f8799b262e75127114bcdb491bb2a70029";

export class KernelStorage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KernelStorage> {
    return super.deploy(overrides || {}) as Promise<KernelStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KernelStorage {
    return super.attach(address) as KernelStorage;
  }
  connect(signer: Signer): KernelStorage__factory {
    return super.connect(signer) as KernelStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KernelStorageInterface {
    return new utils.Interface(_abi) as KernelStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KernelStorage {
    return new Contract(address, _abi, signerOrProvider) as KernelStorage;
  }
}
