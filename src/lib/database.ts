import { DataSource } from "typeorm";
import config from "@/config";
import TokenTransaction from "@/entity/TokenTransaction";

const entities = [TokenTransaction];

export const AppDataSource = new DataSource({
    type: "postgres",
    host: config.postgresqlSettings.host,
    port: config.postgresqlSettings.port,
    username: config.postgresqlSettings.user,
    password: config.postgresqlSettings.password,
    database: config.postgresqlSettings.dbname,
    synchronize: true, // To synchronize the database schema with entities during the development phase
    logging: false,
    entities: entities,
    subscribers: [],
    migrations: [],
});

export const connectToDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Database connection established");
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
};
