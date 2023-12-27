import Web3 from 'web3';
import IErc20 from './IErc20';

export default class Erc20Token implements IErc20 {
  private _web3: Web3;
  private _contract: any;
  private _account: string;
  public _contractAbi: any;

  constructor(tokenAddress: string, providerUrl: string, account: string, contractAbi: any) {
    this._web3 = new Web3(providerUrl);
    this._contract = new this._web3.eth.Contract(contractAbi, tokenAddress);
    this._account = account;
  }

  async totalSupply() {
    return this._contract.methods.totalSupply().call();
  }

  async balanceOf(address: string) {
    return this._contract.methods.balanceOf(address).call();
  }

  async owner() {
    return this._contract.methods.owner().call();
  }

  async transfer(to: string, amount: number) {
    const tokenAmount = this._web3.utils.toWei(String(amount), 'ether');
    const transaction = await this._contract.methods.transfer(to, tokenAmount).send({ from: this._account });
    return transaction;
  }

  async transferFrom(from: string, to: string, amount: number) {
    const tokenAmount = this._web3.utils.toWei(String(amount), 'ether');
    const transaction = await this._contract.methods.transferFrom(from, to, tokenAmount).send({ from: this._account });
    return transaction;
  }

  async approve(spender: string, amount: number) {
    const tokenAmount = this._web3.utils.toWei(String(amount), 'ether');
    const transaction = await this._contract.methods.approve(spender, tokenAmount).send({ from: this._account });
    return transaction;
  }

  async mint(to: string, amount: number) {
    const tokenAmount = this._web3.utils.toWei(String(amount), 'ether');
    const transaction = await this._contract.methods.mint(to, tokenAmount).send({ from: this._account });
    return transaction;
  }

  async transferOwnership(newOwner: string) {
    const transaction = await this._contract.methods.transferOwnership(newOwner).send({ from: this._account });
    return transaction;
  }
}
