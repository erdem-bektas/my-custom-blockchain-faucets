export default interface IErc721 {
    balanceOf(owner: string): Promise<number>;
    getApproved(tokenId: number): Promise<boolean>;
    ownerOf(tokenId: number): Promise<string>;
    tokenURI(tokenId: number): Promise<string>;
    totalSupply(): Promise<number>;
    mint(to: string, id: number, amount: number, data: string): Promise<void>;
    mintBatch(to: string, ids: number[], amounts: number[], data: string): Promise<void>;
    setURI(uri: string): Promise<void>;
    transferFrom(from: string, to: string, tokenId: number): Promise<boolean>;
    transferOwnership(newOwner: string): Promise<void>;
    safeTransferFrom(from: string, to: string, id: number, amount: number, data: string): Promise<void>;
}
