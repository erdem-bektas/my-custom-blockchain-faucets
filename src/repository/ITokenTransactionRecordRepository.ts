import TokenTransaction from "@/entity/TokenTransaction";

export default interface ITokenTransactionRecordRepository {
    findOne(transactionHash: string): Promise<TokenTransaction | null>;
    create(tokenTransaction: TokenTransaction): Promise<TokenTransaction>;
    getAll(): Promise<TokenTransaction[]>;
    findById(id: number): Promise<TokenTransaction | null>;
    delete(id: number): Promise<void>;
}
