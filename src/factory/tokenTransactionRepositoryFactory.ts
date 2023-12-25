import { AppDataSource } from '@/lib/database';
import TokenTransactionRepository from '@/repository/TokenTransactionRepository';

export const tokenTransactionRepositoryFactory = () => {
    return new TokenTransactionRepository(AppDataSource);
}
