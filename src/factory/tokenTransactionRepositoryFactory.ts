import { AppDataSource } from '@/lib/database';
import TokenTransactionRepository from '@/repository/TokenTransactionRecordRepository';

export const tokenTransactionRepositoryFactory = () => {
    return new TokenTransactionRepository(AppDataSource);
}
