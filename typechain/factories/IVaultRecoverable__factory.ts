/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IVaultRecoverable,
  IVaultRecoverableInterface,
} from "../IVaultRecoverable";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "getRecoveryVault",
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
    inputs: [
      {
        name: "token",
        type: "address",
      },
    ],
    name: "allowRecoverability",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "token",
        type: "address",
      },
    ],
    name: "transferToVault",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "vault",
        type: "address",
      },
      {
        indexed: true,
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RecoverToVault",
    type: "event",
  },
];

export class IVaultRecoverable__factory {
  static readonly abi = _abi;
  static createInterface(): IVaultRecoverableInterface {
    return new utils.Interface(_abi) as IVaultRecoverableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVaultRecoverable {
    return new Contract(address, _abi, signerOrProvider) as IVaultRecoverable;
  }
}
