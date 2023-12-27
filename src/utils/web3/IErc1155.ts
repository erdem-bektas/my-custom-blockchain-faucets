export default interface IErc1155 {
    approve(to: string, tokenId: number): Promise<boolean>;
    getApproved(tokenId: number): Promise<string>;
    balanceOf(account: string, id: number): Promise<number>;
    balanceOfBatch(accounts: string[], ids: number[]): Promise<number[]>;
    setApprovalForAll(operator: string, approved: boolean): Promise<void>;
    isApprovedForAll(account: string, operator: string): Promise<boolean>;
    transferFrom(from: string, to: string, tokenId: number): Promise<boolean>;
    safeTransferFrom(from: string, to: string, id: number, amount: number, data: string): Promise<void>;
    safeBatchTransferFrom(from: string, to: string, ids: number[], amounts: number[], data: string): Promise<void>;
    mint(to: string, id: number, amount: number, data: string): Promise<void>;
    mintBatch(to: string, ids: number[], amounts: number[], data: string): Promise<void>;
    setURI(uri: string): Promise<void>;
    transferOwnership(newOwner: string): Promise<void>;
    uri(id: number): Promise<string>;
}
