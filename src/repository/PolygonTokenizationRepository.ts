import Erc20Token from "@/utils/web3/Erc20";
import Erc721Token from "@/utils/web3/Erc721";
import config from "@/config";
import HDWalletProvider from "@truffle/hdwallet-provider";

const provider = new HDWalletProvider({
  privateKeys: [config.DISTRIBUTOR_WALLET_PRIVATE_KEY],
  providerOrUrl: config.POLYGON_ENDPOINT,
});

class PolygonErc20RepositoryClass extends Erc20Token {
  constructor(
    tokenAddress: string,
    provider: any,
    account: string,
    contractAbi: any
  ) {
    super(tokenAddress, provider, account, contractAbi);
  }
}

class PolygonErc721RepositoryClass extends Erc721Token {
  constructor(
    contractAddress: string,
    providerUrl: any,
    privateKey: any,
    contractAbi: any
  ) {
    super(contractAddress, providerUrl, privateKey, contractAbi);
  }
}

export const PolygonErc20XTokenRepository = new PolygonErc20RepositoryClass(
  config.polygon_erc20contractAddress,
  provider,
  config.polygon_erc20contractOwner,
  config.polygon_erc20contractAbi
);

export const PolygonErc20YTokenRepository = new PolygonErc20RepositoryClass(
  config.polygon_erc20YTokencontractAddress,
  provider,
  config.polygon_erc20YTokencontractOwner,
  config.polygon_erc20YTokencontractAbi
);

export const PolygonErc721Repository = new PolygonErc721RepositoryClass(
  config.polygon_erc721contractAddress,
  provider,
  config.DISTRIBUTOR_WALLET_PRIVATE_KEY,
  config.polygon_erc721contractAbi
);
