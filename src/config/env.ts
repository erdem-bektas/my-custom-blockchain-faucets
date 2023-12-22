export const ENV = {
  PORT: process.env.PORT || 3000,
  INFURA_KEY: process.env.INFURA_KEY || "",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: process.env.DB_PORT || 5432,
  DB_NAME: process.env.DB_NAME || "testdb",
  DB_USER: process.env.DB_USER || "",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
  APPLICATION_ID: process.env.APPLICATION_ID || "",
  APPLICATION_KEY: process.env.APPLICATION_KEY || "",
  REDIS_HOST: process.env.REDIS_HOST || "127.0.0.1",
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  DISTRIBUTOR_WALLET_PRIVATE_KEY: "0x" + process.env.DISTRIBUTOR_WALLET_PRIVATE_KEY || "",
} as const;
