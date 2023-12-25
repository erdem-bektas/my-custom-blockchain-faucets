import TokenTransaction from "@/entity/TokenTransaction";

export default interface ITokenTransactionRepository {
    findOne(transactionHash: string): Promise<TokenTransaction | null>;
    create(tokenTransaction: TokenTransaction): Promise<TokenTransaction>;
    getAll(): Promise<TokenTransaction[]>;
    findById(id: number): Promise<TokenTransaction | null>;
    update(tokenTransaction: TokenTransaction): Promise<TokenTransaction>;
    delete(id: number): Promise<void>;
}
