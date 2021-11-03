/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EVMScriptRegistry,
  EVMScriptRegistryInterface,
} from "../EVMScriptRegistry";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_script",
        type: "bytes",
      },
    ],
    name: "getScriptExecutor",
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
    name: "hasInitialized",
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
    constant: true,
    inputs: [],
    name: "REGISTRY_ADD_EXECUTOR_ROLE",
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
    inputs: [
      {
        name: "_script",
        type: "bytes",
      },
    ],
    name: "getEVMScriptExecutor",
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
    constant: false,
    inputs: [
      {
        name: "_executorId",
        type: "uint256",
      },
    ],
    name: "disableScriptExecutor",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
    constant: false,
    inputs: [],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_executor",
        type: "address",
      },
    ],
    name: "addScriptExecutor",
    outputs: [
      {
        name: "id",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getInitializationBlock",
    outputs: [
      {
        name: "",
        type: "uint256",
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
        name: "_token",
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
    constant: true,
    inputs: [
      {
        name: "_sender",
        type: "address",
      },
      {
        name: "_role",
        type: "bytes32",
      },
      {
        name: "_params",
        type: "uint256[]",
      },
    ],
    name: "canPerform",
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
    constant: true,
    inputs: [],
    name: "getEVMScriptRegistry",
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
    name: "REGISTRY_MANAGER_ROLE",
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
    constant: false,
    inputs: [
      {
        name: "_executorId",
        type: "uint256",
      },
    ],
    name: "enableScriptExecutor",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
  {
    constant: true,
    inputs: [],
    name: "isPetrified",
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
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "executors",
    outputs: [
      {
        name: "executor",
        type: "address",
      },
      {
        name: "enabled",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "executorId",
        type: "uint256",
      },
      {
        indexed: true,
        name: "executorAddress",
        type: "address",
      },
    ],
    name: "EnableExecutor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "executorId",
        type: "uint256",
      },
      {
        indexed: true,
        name: "executorAddress",
        type: "address",
      },
    ],
    name: "DisableExecutor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "executor",
        type: "address",
      },
      {
        indexed: false,
        name: "script",
        type: "bytes",
      },
      {
        indexed: false,
        name: "input",
        type: "bytes",
      },
      {
        indexed: false,
        name: "returnData",
        type: "bytes",
      },
    ],
    name: "ScriptResult",
    type: "event",
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

const _bytecode =
  "0x6080604052620000176401000000006200001d810204565b6200023b565b6200003064010000000062000125810204565b60408051808201909152601881527f494e49545f414c52454144595f494e495449414c495a45440000000000000000602082015290156200010c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620000d0578181015183820152602001620000b6565b50505050905090810190601f168015620000fe5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506200012360001964010000000062000154810204565b565b60006200014f600080516020620018a7833981519152640100000000620012bf6200023382021704565b905090565b6200016764010000000062000125810204565b60408051808201909152601881527f494e49545f414c52454144595f494e495449414c495a454400000000000000006020820152901562000206576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252838181518152602001915080519060200190808383600083811015620000d0578181015183820152602001620000b6565b5062000230600080516020620018a783398151915282640100000000620015a56200023782021704565b50565b5490565b9055565b61165c806200024b6000396000f3006080604052600436106100ed5763ffffffff60e060020a60003504166304bf2a7f81146100f25780630803fac01461016757806319f3d10f146101905780632914b9bd146101b757806332f0a3b5146102105780635ca4d4bb146102255780637e7db6e11461023f57806380afdea8146102605780638129fc1c1461027557806387a16f121461028a5780638b3dd749146102ab5780639d4941d8146102c0578063a1658fad146102e1578063a479e50814610348578063bd8fde1c1461035d578063cff606a014610372578063d4aae0c41461038a578063de4796ed1461039f578063f97a05df146103b4575b600080fd5b3480156100fe57600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261014b9436949293602493928401919081908401838280828437509497506103ef9650505050505050565b60408051600160a060020a039092168252519081900360200190f35b34801561017357600080fd5b5061017c61050c565b604080519115158252519081900360200190f35b34801561019c57600080fd5b506101a5610535565b60408051918252519081900360200190f35b3480156101c357600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261014b9436949293602493928401919081908401838280828437509497506105599650505050505050565b34801561021c57600080fd5b5061014b61063f565b34801561023157600080fd5b5061023d6004356106b7565b005b34801561024b57600080fd5b5061017c600160a060020a0360043516610875565b34801561026c57600080fd5b506101a561087b565b34801561028157600080fd5b5061023d6108ab565b34801561029657600080fd5b506101a5600160a060020a0360043516610948565b3480156102b757600080fd5b506101a5610ac2565b3480156102cc57600080fd5b5061023d600160a060020a0360043516610aed565b3480156102ed57600080fd5b50604080516020600460443581810135838102808601850190965280855261017c958335600160a060020a0316956024803596369695606495939492019291829185019084908082843750949750610d7c9650505050505050565b34801561035457600080fd5b5061014b610ecc565b34801561036957600080fd5b506101a5610f81565b34801561037e57600080fd5b5061023d600435610fa5565b34801561039657600080fd5b5061014b611202565b3480156103ab57600080fd5b5061017c61122d565b3480156103c057600080fd5b506103cc600435611240565b60408051600160a060020a03909316835290151560208301528051918290030190f35b60008060006004845110156040805190810160405280601e81526020017f45564d5245475f5343524950545f4c454e4754485f544f4f5f53484f525400008152509015156104be5760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561048357818101518382015260200161046b565b50505050905090810190601f1680156104b05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506104c884611267565b63ffffffff1660008181526001602052604090208054919350915060a060020a900460ff166104f8576000610504565b8054600160a060020a03165b949350505050565b600080610517610ac2565b9050801580159061052f57508061052c61127a565b10155b91505090565b7fc4e90f38eea8c4212a009ca7b8947943ba4d4a58d19b683417f65291d1cd9ed281565b6000610563610ecc565b600160a060020a03166304bf2a7f836040518263ffffffff1660e060020a0281526004018080602001828103825283818151815260200191508051906020019080838360005b838110156105c15781810151838201526020016105a9565b50505050905090810190601f1680156105ee5780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b15801561060d57600080fd5b505af1158015610621573d6000803e3d6000fd5b505050506040513d602081101561063757600080fd5b505192915050565b6000610649611202565b600160a060020a03166332f0a3b56040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561068657600080fd5b505af115801561069a573d6000803e3d6000fd5b505050506040513d60208110156106b057600080fd5b5051905090565b60007ff7a450ef335e1892cb42c8ca72e7242359d7711924b75db5717410da3f614aa36106e38361127e565b6106ee338383610d7c565b60408051808201909152600f81527f4150505f415554485f4641494c4544000000000000000000000000000000000060208201529015156107745760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561048357818101518382015260200161046b565b5060008481526001602090815260409182902080548351808501909452601884527f45564d5245475f4558454355544f525f44495341424c4544000000000000000092840192909252945060a060020a900460ff16151561081a5760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561048357818101518382015260200161046b565b50825474ff00000000000000000000000000000000000000001981168455604051600160a060020a039091169085907fc13cd9238f8ab1e5ab1f95cde77e89288fe5c328d04739adffd57b144b408fd190600090a350505050565b50600190565b60006108a67fd625496217aa6a3453eecb9c3489dc5a53e6c67b444329ea2b2cbc9ff547639b6112bf565b905090565b6108b3610ac2565b60408051808201909152601881527f494e49545f414c52454144595f494e495449414c495a45440000000000000000602082015290156109385760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561048357818101518382015260200161046b565b506109416112c3565b6001600055565b6040805160008082526020820190925281907fc4e90f38eea8c4212a009ca7b8947943ba4d4a58d19b683417f65291d1cd9ed2906109899033908390610d7c565b60408051808201909152600f81527f4150505f415554485f4641494c454400000000000000000000000000000000006020820152901515610a0f5760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561048357818101518382015260200161046b565b506000805460018082018355604080518082018252600160a060020a03808a168083526020808401868152878952959052838720925183549551151560a060020a0274ff0000000000000000000000000000000000000000199190931673ffffffffffffffffffffffffffffffffffffffff199096169590951794909416179055519194509184917f7697fa3288629310075a63816e294207c84f3cfc18ccf8e18eb917ec0bb566999190a35092915050565b60006108a67febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e6112bf565b6000806000610afb84610875565b60408051808201909152601281527f5245434f5645525f444953414c4c4f57454400000000000000000000000000006020820152901515610b815760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561048357818101518382015260200161046b565b50610b8a61063f565b9250610b958361138f565b60408051808201909152601a81527f5245434f5645525f5641554c545f4e4f545f434f4e54524143540000000000006020820152901515610c1b5760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561048357818101518382015260200161046b565b50600160a060020a0384161515610c6c5760405130319250600160a060020a0384169083156108fc029084906000818181858888f19350505050158015610c66573d6000803e3d6000fd5b50610d2b565b5082610c87600160a060020a0382163063ffffffff6113bc16565b9150610ca3600160a060020a038216848463ffffffff6114d116565b60408051808201909152601d81527f5245434f5645525f544f4b454e5f5452414e534645525f4641494c45440000006020820152901515610d295760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561048357818101518382015260200161046b565b505b83600160a060020a031683600160a060020a03167f596caf56044b55fb8c4ca640089bbc2b63cae3e978b851f5745cbb7c5b288e02846040518082815260200191505060405180910390a350505050565b600080610d8761050c565b1515610d965760009150610ec4565b610d9e611202565b9050600160a060020a0381161515610db95760009150610ec4565b80600160a060020a031663fdef9106863087610dd48861155c565b60405160e060020a63ffffffff8716028152600160a060020a03808616600483019081529085166024830152604482018490526080606483019081528351608484015283519192909160a490910190602085019080838360005b83811015610e46578181015183820152602001610e2e565b50505050905090810190601f168015610e735780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610e9557600080fd5b505af1158015610ea9573d6000803e3d6000fd5b505050506040513d6020811015610ebf57600080fd5b505191505b509392505050565b600080610ed7611202565b604080517fbe00bbd80000000000000000000000000000000000000000000000000000000081527fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb60048201527fddbcfd564f642ab5627cf68b9b7d374fb4f8a36e941a75d89c87998cef03bd6160248201529051600160a060020a03929092169163be00bbd8916044808201926020929091908290030181600087803b15801561060d57600080fd5b7ff7a450ef335e1892cb42c8ca72e7242359d7711924b75db5717410da3f614aa381565b60007ff7a450ef335e1892cb42c8ca72e7242359d7711924b75db5717410da3f614aa3610fd18361127e565b610fdc338383610d7c565b60408051808201909152600f81527f4150505f415554485f4641494c4544000000000000000000000000000000000060208201529015156110625760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561048357818101518382015260200161046b565b5083600081118015611075575060005481105b60408051808201909152601a81527f45564d5245475f494e4558495354454e545f4558454355544f5200000000000060208201529015156110fb5760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561048357818101518382015260200161046b565b5060008581526001602090815260409182902080548351808501909452601784527f45564d5245475f4558454355544f525f454e41424c454400000000000000000092840192909252955060a060020a900460ff16156111a05760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561048357818101518382015260200161046b565b50835474ff0000000000000000000000000000000000000000191660a060020a17808555604051600160a060020a039091169086907f7697fa3288629310075a63816e294207c84f3cfc18ccf8e18eb917ec0bb5669990600090a35050505050565b60006108a67f4172f0f7d2289153072b0a6ca36959e0cbe2efc3afe50fc81636caa96338137b6112bf565b600060001961123a610ac2565b14905090565b600160205260009081526040902054600160a060020a0381169060a060020a900460ff1682565b6000611274826000611566565b92915050565b4390565b60408051600180825281830190925260609160208083019080388339019050509050818160008151811015156112b057fe5b60209081029091010152919050565b5490565b6112cb610ac2565b60408051808201909152601881527f494e49545f414c52454144595f494e495449414c495a45440000000000000000602082015290156113505760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561048357818101518382015260200161046b565b5061138961135c61127a565b7febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e9063ffffffff6115a516565b565b5490565b600080600160a060020a03831615156113ab57600091506113b6565b823b90506000811191505b50919050565b60408051600160a060020a0383166024808301919091528251808303909101815260449091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f70a0823100000000000000000000000000000000000000000000000000000000179052600090818061143c86846115a9565b60408051808201909152601c81527f534146455f4552435f32305f42414c414e43455f524556455254454400000000602082015291935091508215156114c75760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561048357818101518382015260200161046b565b5095945050505050565b60408051600160a060020a038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905260009061155385826115da565b95945050505050565b8051602002815290565b6000806115738484611628565b60e060020a7fffffffff0000000000000000000000000000000000000000000000000000000090911604949350505050565b9055565b6000806000806040516020818751602089018a5afa925060008311156115ce57805191505b50909590945092505050565b6000806040516020818551602087016000895af1600081111561161e573d801561160b57602081146116145761161c565b6001935061161c565b600183511493505b505b5090949350505050565b0160200151905600a165627a7a723058203069999ff4cd29a11b2d7c451eba62dc28800f47a8b063bcf7fa7a91c63ea90d0029ebb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e";

export class EVMScriptRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EVMScriptRegistry> {
    return super.deploy(overrides || {}) as Promise<EVMScriptRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EVMScriptRegistry {
    return super.attach(address) as EVMScriptRegistry;
  }
  connect(signer: Signer): EVMScriptRegistry__factory {
    return super.connect(signer) as EVMScriptRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EVMScriptRegistryInterface {
    return new utils.Interface(_abi) as EVMScriptRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EVMScriptRegistry {
    return new Contract(address, _abi, signerOrProvider) as EVMScriptRegistry;
  }
}
