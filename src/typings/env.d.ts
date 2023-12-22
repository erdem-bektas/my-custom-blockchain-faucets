declare namespace NodeJS {
    export interface ProcessEnv {
        NODE_ENV: string;
        PORT: number;
        INFURA_KEY: string;
        DISTRIBUTOR_WALLET_PRIVATE_KEY: string;
        DB_HOST: string;
        DB_PORT: number;
        DB_NAME: string;
        DB_USER: string;
        DB_PASSWORD: string;
        APPLICATION_ID: string;
        APPLICATION_KEY: string;
        REDIS_HOST: string;
        REDIS_PORT: number;
    }
}
