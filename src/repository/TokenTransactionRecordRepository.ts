import { Repository, DataSource } from 'typeorm';
import TokenTransaction from "@/entity/TokenTransaction";
import ITokenTransactionRecordRepository from './ITokenTransactionRecordRepository';

export default class TokenTransactionRecordRepository implements ITokenTransactionRecordRepository {
    private repository: Repository<TokenTransaction>;

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(TokenTransaction);
    }

    async findOne(txHash: string): Promise<TokenTransaction | null> {
        return await this.repository.findOneBy({ transactionHash: txHash });
    }

    async create(tokenTransaction: TokenTransaction): Promise<TokenTransaction> {
        return await this.repository.save(tokenTransaction);
    }

    async getAll(): Promise<TokenTransaction[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<TokenTransaction | null> {
        return await this.repository.findOneBy({ id });
    }

    async updateTokenTransactionById(id: number, updateData: Partial<TokenTransaction>): Promise<TokenTransaction | null> {
        const tokenTransaction = await this.repository.findOneBy({ id });
        if (!tokenTransaction) {
            return null;
        }

        Object.assign(tokenTransaction, updateData);
        await this.repository.save(tokenTransaction);
        return tokenTransaction;
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
