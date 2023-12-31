import { Erc20Service } from "./Erc20Service";
import TokenTransactionRecordService from "./TokenTransactionRecordService";

export default class TokenTransactionManager {
    private erc20Service: Erc20Service;
    private transactionRecordService: TokenTransactionRecordService;

    constructor(erc20Service: Erc20Service, transactionRecordService: TokenTransactionRecordService) {
        this.erc20Service = erc20Service;
        this.transactionRecordService = transactionRecordService;
    }

    send(to: string, amount: number): Promise<void> {
        return new Promise(async (resolve, reject) => {
            const transactionInput = {
                userAddress: to,
                amount: amount,
            }
            const savedTransactionData = await this.transactionRecordService.createTokenTransaction(transactionInput);
            this.erc20Service.transfer(to, amount)
                .then(async (transactionResult: any) => {
                    console.log(`txHash: ${transactionResult.transactionHash}`)
                    const d = await this.transactionRecordService.updateTokenTransactionById(savedTransactionData.id, { transactionHash: transactionResult.transactionHash })

                    if (transactionResult.status === true && transactionResult.type === "0x2") {
                        const statusUpdate = await this.transactionRecordService.updateTokenTransactionById(savedTransactionData.id, { status: "sended" })
                        if (statusUpdate !== null) {
                            resolve();
                        }
                        else {
                            reject();
                        }
                    }
                    else if (transactionResult.status !== true || transactionResult.type !== "0x2") {
                        const statusUnexpected = await this.transactionRecordService.updateTokenTransactionById(savedTransactionData.id, { status: "unexpectedErr" })
                        reject(statusUnexpected);
                    }
                    else if (transactionResult.status === false) {
                        const statusFailed = await this.transactionRecordService.updateTokenTransactionById(savedTransactionData.id, { status: "failed" })
                        reject(statusFailed);
                    }
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    }
}