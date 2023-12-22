import { ENV } from "./env";

export const developmentEndpoints = {
  ETHEREUM_ENDPOINT: `https://sepolia.infura.io/v3/${ENV.INFURA_KEY}`,
  POLYGON_ENDPOINT: `https://polygon-mumbai.infura.io/v3/${ENV.INFURA_KEY}`,
  BSC_ENDPOINT: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
};

export const productionEndpoints = {
  ETHEREUM_ENDPOINT: "",
  POLYGON_ENDPOINT: "",
  BSC_ENDPOINT: "",
};
