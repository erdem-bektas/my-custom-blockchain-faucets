import { EthereumErc20XTokenRepository, EthereumErc20YTokenRepository } from '@/repository/EthereumTokenizationRepository';
import { PolygonErc20XTokenRepository, PolygonErc20YTokenRepository } from '@/repository/PolygonTokenizationRepository';
import { Erc20Service } from '@/service/Erc20Service';
import TokenTransactionManager from '@/service/TokenTransactionManager';
import TokenTransactionRecordRepository from '@/repository/TokenTransactionRecordRepository';
import TokenTransactionRecordService from '@/service/TokenTransactionRecordService';
import { AppDataSource } from '@/lib/database';

export class Erc20TokenTransactionManagerFactory {
    private ethereumErc20XTokenService: Erc20Service;
    private ethereumErc20YTokenRepository: Erc20Service;
    private polygonErc20XTokenService: Erc20Service;
    private polygonErc20YTokenService: Erc20Service;
    private transactionRecordService: TokenTransactionRecordService;

    constructor() {
        this.ethereumErc20XTokenService = new Erc20Service(EthereumErc20XTokenRepository);
        this.ethereumErc20YTokenRepository = new Erc20Service(EthereumErc20YTokenRepository);
        this.polygonErc20XTokenService = new Erc20Service(PolygonErc20XTokenRepository);
        this.polygonErc20YTokenService = new Erc20Service(PolygonErc20YTokenRepository);

        const tokenTransactionRecordRepository = new TokenTransactionRecordRepository(AppDataSource);
        this.transactionRecordService = new TokenTransactionRecordService(tokenTransactionRecordRepository);
    }

    createEthereumXTokenTransactionManager(): TokenTransactionManager {
        return new TokenTransactionManager(this.ethereumErc20XTokenService, this.transactionRecordService);
    }

    createEthereumYTokenTransactionManager(): TokenTransactionManager {
        return new TokenTransactionManager(this.ethereumErc20YTokenRepository, this.transactionRecordService);
    }

    createPolygonErc20XTokenTransactionManager(): TokenTransactionManager {
        return new TokenTransactionManager(this.polygonErc20XTokenService, this.transactionRecordService);
    }

    createPolygonErc20YTokenTransactionManager(): TokenTransactionManager {
        return new TokenTransactionManager(this.polygonErc20YTokenService, this.transactionRecordService);
    }
}
