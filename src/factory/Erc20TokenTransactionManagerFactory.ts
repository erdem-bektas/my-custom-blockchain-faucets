import { EthereumErc20Repository } from '@/repository/EthereumTokenizationRepository';
import { PolygonErc20Repository } from '@/repository/PolygonTokenizationRepository';
import { Erc20Service } from '@/service/Erc20Service';
import TokenTransactionManager from '@/service/TokenTransactionManager';
import TokenTransactionRecordRepository from '@/repository/TokenTransactionRecordRepository';
import TokenTransactionRecordService from '@/service/TokenTransactionRecordService';
import { AppDataSource } from '@/lib/database';

export class Erc20TokenTransactionManagerFactory {
    private ethereumErc20Service: Erc20Service;
    private polygonErc20Service: Erc20Service;
    private transactionRecordService: TokenTransactionRecordService;

    constructor() {
        this.ethereumErc20Service = new Erc20Service(EthereumErc20Repository);
        this.polygonErc20Service = new Erc20Service(PolygonErc20Repository);

        const tokenTransactionRecordRepository = new TokenTransactionRecordRepository(AppDataSource);
        this.transactionRecordService = new TokenTransactionRecordService(tokenTransactionRecordRepository);
    }

    createEthereumTokenTransactionManager(): TokenTransactionManager {
        return new TokenTransactionManager(this.ethereumErc20Service, this.transactionRecordService);
    }

    createPolygonTokenTransactionManager(): TokenTransactionManager {
        return new TokenTransactionManager(this.polygonErc20Service, this.transactionRecordService);
    }
}
