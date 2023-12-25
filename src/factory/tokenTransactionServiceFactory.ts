import { tokenTransactionRepositoryFactory } from './tokenTransactionRepositoryFactory';
import TokenTransactionService from '@/service/TokenTransactionService';

export const tokenTransactionServiceFactory = () => {
    const tokenTransactionRepository = tokenTransactionRepositoryFactory();
    return new TokenTransactionService(tokenTransactionRepository);
}
