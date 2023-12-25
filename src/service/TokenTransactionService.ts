import TokenTransaction from "@/entity/TokenTransaction";
import ITokenTransactionRepository from "@/repository/ITokenTransactionRepository";

export default class TokenTransactionService {
    private tokenTransactionRepository: ITokenTransactionRepository;

    constructor(tokenTransactionRepository: ITokenTransactionRepository) {
        this.tokenTransactionRepository = tokenTransactionRepository;
    }

    async createTokenTransaction(tokenTransactionData: Partial<TokenTransaction>): Promise<TokenTransaction> {
        const txHash = tokenTransactionData.transactionHash || "";
        const existingTransaction = await this.tokenTransactionRepository.findOne(txHash);
        if (existingTransaction) {
            throw new Error('transactionHash already exists');
        }

        const tokenTransaction = new TokenTransaction();
        Object.assign(tokenTransaction, tokenTransactionData);

        return await this.tokenTransactionRepository.create(tokenTransaction);
    }

    async getAllTokenTransactions(): Promise<TokenTransaction[]> {
        return await this.tokenTransactionRepository.getAll();
    }

    async getTokenTransactionById(id: number): Promise<TokenTransaction | null> {
        return await this.tokenTransactionRepository.findById(id);
    }

    async updateTokenTransaction(tokenTransaction: TokenTransaction): Promise<TokenTransaction> {
        return await this.tokenTransactionRepository.update(tokenTransaction);
    }

    async deleteTokenTransaction(id: number): Promise<void> {
        await this.tokenTransactionRepository.delete(id);
    }

}
