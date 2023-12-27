import Web3 from 'web3';
import IErc721 from './IErc721';

export default class Erc721Token implements IErc721{
    private _web3: Web3;
    private _contract: any;
    private _contractAddress: string;
    private _privateKey: string;
    private _account: string;

    constructor(contractAddress: string, providerUrl: string, privateKey: string, contractAbi: any) {
        this._contractAddress = contractAddress;
        this._web3 = new Web3(providerUrl);
        this._contract = new this._web3.eth.Contract(contractAbi, contractAddress);
        this._privateKey = privateKey;
        this._account = this._web3.eth.accounts.privateKeyToAccount(this._privateKey).address;
    }
    balanceOf(owner: string): Promise<number> {
        throw new Error('Method not implemented.');
    }
    getApproved(tokenId: number): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    ownerOf(tokenId: number): Promise<string> {
        throw new Error('Method not implemented.');
    }
    tokenURI(tokenId: number): Promise<string> {
        throw new Error('Method not implemented.');
    }
    totalSupply(): Promise<number> {
        throw new Error('Method not implemented.');
    }
    mint(to: string, id: number, amount: number, data: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    mintBatch(to: string, ids: number[], amounts: number[], data: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    setURI(uri: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    transferFrom(from: string, to: string, tokenId: number): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    transferOwnership(newOwner: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

    public async getBalance(): Promise<any> {
        const balance = await this._contract.methods.balanceOf(this._account).call();
        return Number(balance);
    }

    public async safeTransferFrom(fromAddress: string, toAddress: string,  tokenId: number): Promise<any> {
        const value = 0;
        const gasPrice = await this._web3.eth.getGasPrice();
        const gas = await this._contract.methods.safeTransferFrom(fromAddress, toAddress, tokenId).estimateGas({ from: this._account });

        const rawTransaction = {
            to: this._contractAddress,
            nonce: await this._web3.eth.getTransactionCount(this._account),
            gas: gas,
            gasPrice: gasPrice,
            // value: 0,
            data: this._contract.methods.safeTransferFrom(fromAddress, toAddress, tokenId).encodeABI(),
        };

        const signedTransaction = await this._web3.eth.accounts.signTransaction(rawTransaction, this._privateKey);
        if (!signedTransaction) throw new Error('Transaction signing failed');
        const tx = await this._web3.eth.sendSignedTransaction(signedTransaction.rawTransaction as string);
        return tx;
    }

    public async batchMintNFT(toAddress: string[], ids: number[]): Promise<any> {
        const data = this._contract.methods.batchMintNFT(toAddress, ids).encodeABI();
        const gasLimit = await this._web3.eth.estimateGas({
            from: this._account,
            to: this._contractAddress,
            data: data,
            // value: value,
        });

        const tx = {
            from: this._account,
            to: this._contractAddress,
            data: data,
            // value: value,
            gasPrice: await this._web3.eth.getGasPrice(),
            gas: gasLimit,
        };

        const signedTx = await this._web3.eth.accounts.signTransaction(tx, this._privateKey);
        if (!signedTx) throw new Error('Transaction signing failed');
        return await this._web3.eth.sendSignedTransaction(signedTx.rawTransaction as string);
    }

}