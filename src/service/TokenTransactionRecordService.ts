import TokenTransaction from "@/entity/TokenTransaction";
import ITokenTransactionRecordRepository from "@/repository/TokenTransactionRecordRepository";

export default class TokenTransactionRecordService {
    private tokenTransactionRepository: ITokenTransactionRecordRepository;

    constructor(tokenTransactionRepository: ITokenTransactionRecordRepository) {
        this.tokenTransactionRepository = tokenTransactionRepository;
    }

    async createTokenTransaction(tokenTransactionData: Partial<TokenTransaction>): Promise<any> {
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

    async deleteTokenTransaction(id: number): Promise<void> {
        await this.tokenTransactionRepository.delete(id);
    }

    async updateTokenTransactionById(id: number, updateData: Partial<TokenTransaction>): Promise<TokenTransaction | null> {
        const existingTokenTransaction = await this.tokenTransactionRepository.findById(id);
        if (!existingTokenTransaction) {
            throw new Error(`TokenTransaction with id ${id} not found`);
        }

        return await this.tokenTransactionRepository.updateTokenTransactionById(id, updateData);
    }

}
