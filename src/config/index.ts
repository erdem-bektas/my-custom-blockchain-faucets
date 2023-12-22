import { developmentDatabaseConfigs, productionDatabaseConfigs } from "./databaseConfig";
import { developmentEndpoints, productionEndpoints } from "./endpoints";
import { developmentContractDetails, productionContractDetails } from "./contractDetails";
import { developmentOther, productionOther } from "./other";

const developmentConfigs = {
  ...developmentDatabaseConfigs,
  ...developmentEndpoints,
  ...developmentContractDetails,
  ...developmentOther,
};

const productionConfigs = {
  ...productionDatabaseConfigs,
  ...productionEndpoints,
  ...productionContractDetails,
  ...productionOther,
};

const config = process.env.NODE_ENV === "production" ? productionConfigs : developmentConfigs;
export default config;
