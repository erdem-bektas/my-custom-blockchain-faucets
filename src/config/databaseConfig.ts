import { ENV } from "./env";

export const developmentDatabaseConfigs = {
  postgresqlSettings: {
    host: ENV.DB_HOST,
    port: Number(ENV.DB_PORT),
    dbname: ENV.DB_NAME,
    user: ENV.DB_USER,
    password: ENV.DB_PASSWORD,
  },
} as const;

export const productionDatabaseConfigs = {
  postgresqlSettings: {
    host: ENV.DB_HOST,
    port: Number(ENV.DB_PORT),
    dbname: ENV.DB_NAME,
    user: ENV.DB_USER,
    password: ENV.DB_PASSWORD,
  },
} as const;
