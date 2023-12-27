import Erc20Token from "@/utils/web3/Erc20";

export class Erc20Service {
  private repository: Erc20Token;

  constructor(repository: Erc20Token) {
    this.repository = repository;
  }

  async getTotalSupply(): Promise<number> {
    try {
      return await this.repository.totalSupply();
    } catch (error) {
      console.error("Error in getTotalSupply:", error);
      throw new Error("Unable to get total supply.");
    }
  }

  async getBalance(address: string): Promise<string> {
    try {
      return await this.repository.balanceOf(address);
    } catch (error) {
      console.error("Error in getBalance:", error);
      throw new Error("Unable to get balance.");
    }
  }

  async getOwner(): Promise<string> {
    try {
      return await this.repository.owner();
    } catch (error) {
      console.error("Error in getOwner:", error);
      throw new Error("Unable to get owner.");
    }
  }

  async transfer(to: string, amount: number): Promise<any> {
    try {
      return await this.repository.transfer(to, amount);
    } catch (error) {
      console.error("Error in transfer:", error);
      throw new Error("Transfer failed.");
    }
  }

  async transferFrom(from: string, to: string, amount: number): Promise<any> {
    try {
      return await this.repository.transferFrom(from, to, amount);
    } catch (error) {
      console.error("Error in transferFrom:", error);
      throw new Error("Transfer from failed.");
    }
  }

  async approve(spender: string, amount: number): Promise<any> {
    try {
      return await this.repository.approve(spender, amount);
    } catch (error) {
      console.error("Error in approve:", error);
      throw new Error("Approval failed.");
    }
  }

  async mint(to: string, amount: number): Promise<any> {
    try {
      return await this.repository.mint(to, amount);
    } catch (error) {
      console.error("Error in mint:", error);
      throw new Error("Minting failed.");
    }
  }

  async transferOwnership(newOwner: string): Promise<any> {
    try {
      return await this.repository.transferOwnership(newOwner);
    } catch (error) {
      console.error("Error in transferOwnership:", error);
      throw new Error("Transfer of ownership failed.");
    }
  }
}
