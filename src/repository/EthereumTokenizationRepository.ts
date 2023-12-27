import Erc20Token from "@/utils/web3/Erc20";
import Erc721Token from "@/utils/web3/Erc721";
import config from "@/config";
import HDWalletProvider from '@truffle/hdwallet-provider';

const provider = new HDWalletProvider({
  privateKeys: [config.DISTRIBUTOR_WALLET_PRIVATE_KEY],
  providerOrUrl: config.ETHEREUM_ENDPOINT,
});

class EthereumErc20RepositoryClass extends Erc20Token {
  constructor(
    tokenAddress: string,
    provider: any,
    account: string,
    contractAbi: any
  ) {
    super(tokenAddress, provider, account, contractAbi);
  }
}

class EthereumErc721RepositoryClass extends Erc721Token {
  constructor(
    contractAddress: string,
    providerUrl: any,
    privateKey: string,
    contractAbi: any
  ) {
    super(contractAddress, providerUrl, privateKey, contractAbi);
  }
}

export const EthereumErc20Repository = new EthereumErc20RepositoryClass(
  config.eth_erc20contractAddress,
  provider,
  config.eth_erc20contractOwner,
  config.eth_erc20contractAbi
);

export const EthereumErc721Repository = new EthereumErc721RepositoryClass(
  config.eth_erc721contractAddress,
  provider,
  config.DISTRIBUTOR_WALLET_PRIVATE_KEY,
  config.eth_erc721contractAbi
);
