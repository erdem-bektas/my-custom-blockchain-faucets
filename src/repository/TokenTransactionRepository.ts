import { Repository, DataSource } from 'typeorm';
import TokenTransaction from "@/entity/TokenTransaction";
import ITokenTransactionRepository from './ITokenTransactionRepository';

export default class TokenTransactionRepository implements ITokenTransactionRepository {
    private repository: Repository<TokenTransaction>;

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(TokenTransaction);
    }

    async findOne(transactionHash: string): Promise<TokenTransaction | null> {
        return await this.repository.findOneBy({ transactionHash });
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

    async update(tokenTransaction: TokenTransaction): Promise<TokenTransaction> {
        await this.repository.save(tokenTransaction);
        return tokenTransaction;
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
