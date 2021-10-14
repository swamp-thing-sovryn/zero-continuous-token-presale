import { GAS_LIMIT_PATCH, waitForTxConfirmation } from "./utils";
import { BigNumber, Signer } from "ethers";
import { DeployFunction, DeploymentsExtension } from "hardhat-deploy/types";
import { HardhatEthersHelpers } from "hardhat/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  ACL__factory,
  BalanceRedirectPresale__factory,
  Controller__factory,
  MarketMaker__factory,
  MiniMeToken__factory,
  Kernel__factory,
  Reserve,
  BalanceRedirectPresale,
  MarketMaker,
  TapDisabled,
  Controller,
  Reserve__factory,
  TapDisabled__factory,
  ACL,
} from "../typechain";
import { DAOFactory__factory } from "../typechain/factories/DAOFactory__factory";

type FundrasingApps = {
    reserve: Reserve;
    presale: BalanceRedirectPresale;
    marketMaker: MarketMaker;
    tap: TapDisabled;
    controller: Controller;
  };

const getSigner = (ethers: typeof import("ethers/lib/ethers") & HardhatEthersHelpers) => ethers.provider.getSigner();

// Taken from https://github.com/aragon/aragonOS/blob/master/scripts/deploy-daofactory.js
const createDAO = async (deployments: DeploymentsExtension, deployer: string, signer:Signer): Promise<string> => {
    const kernelDeployment = await deployments.get("Kernel");
    const aclDeployment = await deployments.get("ACL");
    const daoFactoryDeployment = await deployments.get("DAOFactory");
  
    const kernel = Kernel__factory.connect(kernelDeployment.address, signer);
    await waitForTxConfirmation(kernel.initialize(aclDeployment.address, deployer));
  
    const daoFactory = DAOFactory__factory.connect(daoFactoryDeployment.address, signer);
    const newDaoTx = await waitForTxConfirmation(daoFactory.newDAO(deployer, { gasLimit: GAS_LIMIT_PATCH }));
  
    const daoAddress = newDaoTx.logs
      .map(log => {
        if (log.address === daoFactoryDeployment.address) {
          const parsed = daoFactory.interface.parseLog(log);
          return parsed.args.dao;
        }
      })
      .find(dao => dao !== undefined);
  
    const aclAddress = await kernel.acl();
  
    const dao = ACL__factory.connect(aclAddress, signer);
    await waitForTxConfirmation(
      dao.createPermission(deployer, kernel.address, await kernel.APP_MANAGER_ROLE(), deployer, {
        gasLimit: GAS_LIMIT_PATCH,
      }),
    );
    return daoAddress;
  };

const createPermissions = async (
    acl: ACL,
    entities: string[],
    app: string,
    role: string,
    manager: string,
  ): Promise<void> => {
    await waitForTxConfirmation(acl.createPermission(entities[0], app, role, manager, { gasLimit: GAS_LIMIT_PATCH }));
    console.log(`Permission created: entity ${entities[0]} | app ${app} | role ${role} | mananager ${manager}`);
    for (let i = 1; i < entities.length; i++) {
      await waitForTxConfirmation(acl.grantPermission(entities[i], app, role, { gasLimit: GAS_LIMIT_PATCH }));
      console.log(`Permission granted: entity ${entities[i]} | app ${app} | role ${role} | mananager ${manager}`);
    }
  };
  
  const createPermission = async (acl: ACL, entity: string, app: string, role: string, manager: string): Promise<void> =>
    createPermissions(acl, [entity], app, role, manager);
  
  const setupFundraisingPermission = async (deployer: string, fundraisingApps: FundrasingApps, daoAddress: string, signer:Signer) => {
    const dao = Kernel__factory.connect(daoAddress,signer);
    const acl = ACL__factory.connect(await dao.acl(), signer);
  
    const ANY_ENTITY = await acl.ANY_ENTITY();
  
    const owner = deployer;
  
    // reserve
    await createPermission(
      acl,
      owner,
      fundraisingApps.reserve.address,
      await fundraisingApps.reserve.SAFE_EXECUTE_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      fundraisingApps.controller.address,
      fundraisingApps.reserve.address,
      await fundraisingApps.reserve.ADD_PROTECTED_TOKEN_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      fundraisingApps.marketMaker.address,
      fundraisingApps.reserve.address,
      await fundraisingApps.reserve.TRANSFER_ROLE(),
      owner,
    );
    // presale
    await createPermission(
      acl,
      fundraisingApps.controller.address,
      fundraisingApps.presale.address,
      await fundraisingApps.presale.OPEN_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      owner,
      fundraisingApps.presale.address,
      await fundraisingApps.presale.REDUCE_BENEFICIARY_PCT_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      ANY_ENTITY,
      fundraisingApps.presale.address,
      await fundraisingApps.presale.CONTRIBUTE_ROLE(),
      owner,
    );
    // market maker
    await createPermission(
      acl,
      fundraisingApps.controller.address,
      fundraisingApps.marketMaker.address,
      await fundraisingApps.marketMaker.OPEN_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      fundraisingApps.controller.address,
      fundraisingApps.marketMaker.address,
      await fundraisingApps.marketMaker.UPDATE_BENEFICIARY_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      fundraisingApps.controller.address,
      fundraisingApps.marketMaker.address,
      await fundraisingApps.marketMaker.UPDATE_FEES_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      fundraisingApps.controller.address,
      fundraisingApps.marketMaker.address,
      await fundraisingApps.marketMaker.ADD_COLLATERAL_TOKEN_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      fundraisingApps.controller.address,
      fundraisingApps.marketMaker.address,
      await fundraisingApps.marketMaker.REMOVE_COLLATERAL_TOKEN_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      fundraisingApps.controller.address,
      fundraisingApps.marketMaker.address,
      await fundraisingApps.marketMaker.UPDATE_COLLATERAL_TOKEN_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      fundraisingApps.controller.address,
      fundraisingApps.marketMaker.address,
      await fundraisingApps.marketMaker.OPEN_BUY_ORDER_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      fundraisingApps.controller.address,
      fundraisingApps.marketMaker.address,
      await fundraisingApps.marketMaker.OPEN_SELL_ORDER_ROLE(),
      owner,
    );
    // controller
    await createPermission(
      acl,
      owner,
      fundraisingApps.controller.address,
      await fundraisingApps.controller.UPDATE_BENEFICIARY_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      owner,
      fundraisingApps.controller.address,
      await fundraisingApps.controller.UPDATE_FEES_ROLE(),
      owner,
    );
    // ADD_COLLATERAL_TOKEN_ROLE is handled later [after collaterals have been added]
    await createPermission(
      acl,
      owner,
      fundraisingApps.controller.address,
      await fundraisingApps.controller.REMOVE_COLLATERAL_TOKEN_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      owner,
      fundraisingApps.controller.address,
      await fundraisingApps.controller.UPDATE_COLLATERAL_TOKEN_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      owner,
      fundraisingApps.controller.address,
      await fundraisingApps.controller.OPEN_PRESALE_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      fundraisingApps.presale.address,
      fundraisingApps.controller.address,
      await fundraisingApps.controller.OPEN_TRADING_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      ANY_ENTITY,
      fundraisingApps.controller.address,
      await fundraisingApps.controller.CONTRIBUTE_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      ANY_ENTITY,
      fundraisingApps.controller.address,
      await fundraisingApps.controller.OPEN_BUY_ORDER_ROLE(),
      owner,
    );
    await createPermission(
      acl,
      ANY_ENTITY,
      fundraisingApps.controller.address,
      await fundraisingApps.controller.OPEN_SELL_ORDER_ROLE(),
      owner,
    );
  };
  
  const setupCollateral = async (
    deployer: string,
    fundraisingApps: FundrasingApps,
    daoAddress: string,
    collateralTokenAddress: string,
    reserveRatio: BigNumber,
    slippage: BigNumber,
    signer: Signer,
  ): Promise<void> => {
    const dao = Kernel__factory.connect(daoAddress, signer);
    const acl = ACL__factory.connect(await dao.acl(), signer);
    await createPermission(
      acl,
      deployer,
      fundraisingApps.controller.address,
      await fundraisingApps.controller.ADD_COLLATERAL_TOKEN_ROLE(),
      deployer,
    );
  
    // FIXME: add fees
    await waitForTxConfirmation(
      fundraisingApps.controller.addCollateralToken(collateralTokenAddress, 0, 0, reserveRatio, slippage, 0, 0),
    );
  };
  


export const initialize = async (hre:HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts, ethers } = hre;
    const { deployer } = await getNamedAccounts();

    const sConfig = JSON.stringify(hre.network.config);
    const config = JSON.parse(sConfig);
    const { parameters, mockPresale } = config;
    const signer = getSigner(ethers);

    const presaleToDeploy = mockPresale ? "MockedBalancedRedirectPresale" : "BalanceRedirectPresale";
    let sovAddress;
    let zeroAddress;

    parameters.collateralTokenAddress ??= (await deployments.get("CollateralToken")).address;
    parameters.bondedTokenAddress ??= (await deployments.get("BondedToken")).address;
    sovAddress = parameters.collateralTokenAddress;
    zeroAddress = parameters.bondedTokenAddress;
  
    console.log(`Collateral token at address ${sovAddress}`);
    console.log(`Bondend token at address ${zeroAddress}`);
    
    const daoAddress = await createDAO(deployments,deployer, signer);

    const bancorFormulaDeployment = await deployments.get("BancorFormula");
    const reserveDeployment = await deployments.get("Reserve");
    const presaleDeployment = await deployments.get(presaleToDeploy);
    const marketMakerDeployment = await deployments.get("MarketMaker");
    const tapDisabledDeployment = await deployments.get("TapDisabled");
    const controllerDeployment = await deployments.get("Controller");

    const fundraisingApps: FundrasingApps = {
        reserve: await Reserve__factory.connect(reserveDeployment.address, signer),
        presale: await BalanceRedirectPresale__factory.connect(presaleDeployment.address, signer),
        marketMaker: await MarketMaker__factory.connect(marketMakerDeployment.address, signer),
        tap: await TapDisabled__factory.connect(tapDisabledDeployment.address, signer),
        controller: await Controller__factory.connect(controllerDeployment.address, signer),
      };

    const params = {
        owner: deployer,
        collateralToken: sovAddress,
        bondedToken: zeroAddress,
        period: parameters.presalePeriod,
        openDate: parameters.startDate,
        exchangeRate: parameters.presaleEchangeRate,
        mintingForBeneficiaryPct: parameters.beneficiaryPCT,
        reserveRatio: parameters.reserveRatio,
        batchBlocks: parameters.batchBlock,
        slippage: parameters.slippage,
        buyFee: parameters.buyFee,
        sellFee: parameters.selFee,
      };

    await waitForTxConfirmation(
        fundraisingApps.presale.initialize(
          daoAddress,
          fundraisingApps.controller.address,
          fundraisingApps.marketMaker.address,
          zeroAddress,
          fundraisingApps.reserve.address,
          params.owner,
          params.collateralToken,
          params.period,
          params.exchangeRate,
          params.mintingForBeneficiaryPct,
          params.openDate,
        ),
      );
    
    console.log(`Presale initialized`);
      
    await waitForTxConfirmation(
        fundraisingApps.marketMaker.initialize(
          daoAddress,
          fundraisingApps.controller.address,
          zeroAddress,
          bancorFormulaDeployment.address,
          fundraisingApps.reserve.address,
          params.owner,
          params.batchBlocks,
          params.buyFee,
          params.sellFee,
        ),
    );
    
    console.log(`MarketMaker initialized`);
    
    await waitForTxConfirmation(
        fundraisingApps.controller.initialize(
          daoAddress,
          fundraisingApps.presale.address,
          fundraisingApps.marketMaker.address,
          fundraisingApps.reserve.address,
          fundraisingApps.tap.address,
          [],
        ),
    );
    
    console.log(`Controller initialized`);
    
    await waitForTxConfirmation(fundraisingApps.reserve.initialize(daoAddress));
    
    console.log(`Reserve initialized`);
    
    await setupFundraisingPermission(deployer, fundraisingApps, daoAddress, signer);
    
    console.log("Setup fundraising permission done");
    
    await setupCollateral(deployer, fundraisingApps, daoAddress, sovAddress, params.reserveRatio, params.slippage, signer);
    
    console.log("Setup collateral done");
}
