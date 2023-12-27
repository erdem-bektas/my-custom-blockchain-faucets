import { tokenTransactionRepositoryFactory } from './tokenTransactionRepositoryFactory';
import TokenTransactionService from '@/service/TokenTransactionRecordService';

export const tokenTransactionServiceFactory = () => {
    const tokenTransactionRepository = tokenTransactionRepositoryFactory();
    return new TokenTransactionService(tokenTransactionRepository);
}
