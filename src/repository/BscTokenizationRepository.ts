import config from "@/config";
import Erc20Token from "@/utils/web3/Erc20";
import Erc721Token from "@/utils/web3/Erc721";

class BscBep20RepositoryClass extends Erc20Token {
  constructor(
    tokenAddress: string,
    provider: any,
    account: string,
    contractAbi: any
  ) {
    super(tokenAddress, provider, account, contractAbi);
  }
}

class BscBep721RepositoryClass extends Erc721Token {
  constructor(
    contractAddress: string,
    providerUrl: string,
    privateKey: string,
    contractAbi: any
  ) {
    super(contractAddress, providerUrl, privateKey, contractAbi);
  }
}

export const BscBep20Repository = new BscBep20RepositoryClass(
  config.bsc_bep20contractAddress,
  config.BSC_ENDPOINT,
  config.bsc_bep20contractOwner,
  config.bsc_bep20contractAbi
);

export const BscBep721Repository = new BscBep721RepositoryClass(
  config.bsc_bep721contractAddress,
  config.BSC_ENDPOINT,
  config.DISTRIBUTOR_WALLET_PRIVATE_KEY,
  config.bsc_bep721contractAbi
);
