import type { NextApiRequest, NextApiResponse } from 'next';
import { Erc20TokenTransactionManagerFactory } from '@/factory/Erc20TokenTransactionManagerFactory';
import { Erc721TokenTransactionManagerFactory } from '@/factory/Erc721TokenTransactionManagerFactory';
import { AppDataSource } from '@/lib/database';
import { validateCreateTokenTransaction } from './middlewares/validateCreateTokenTransaction';

enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    MethodNotAllowed = 405,
    InternalServerError = 500,
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        res.status(HttpStatus.MethodNotAllowed).end('Method Not Allowed');
        return;
    }
    try {

        await validateCreateTokenTransaction(req, res, async () => {
            await AppDataSource.initialize();
            const { network, wallet, amount, tokenType, token } = req.body;

            console.log("body", req.body);

            const tokenTransactionManager = getTokenTransactionManager(network, tokenType, token);
            if (!tokenTransactionManager) {
                return res.status(400).json({ message: 'Invalid or missing network type' });
            }

            tokenTransactionManager.send(wallet, amount)
                .then((savedTransaction) => {
                    console.log("The transfer was successful and the transaction was recorded.");
                    res.status(200).json(savedTransaction);
                })
                .catch(error => {
                    console.error("Error occurred during transfer:", error);
                    res.status(500).json(error);
                });
        })
    } catch (error) {
        console.error('Error in create-token-transaction:', error);
        res.status(HttpStatus.InternalServerError).json({ message: 'Internal Server Error' });
    }
}

function getTokenTransactionManager(network: string, tokenType: string, token: string) {
    const factory = new Erc20TokenTransactionManagerFactory();
    const factory721 = new Erc721TokenTransactionManagerFactory();

    if (tokenType === 'Erc20') {
        switch (network) {
            case "Ethereum":
                if (token === 'X') {
                    return factory.createEthereumXTokenTransactionManager();
                }
                if (token === 'Y') {
                    return factory.createEthereumYTokenTransactionManager();
                }
            case "Polygon":
                if (token === 'X') {
                    return factory.createPolygonErc20XTokenTransactionManager();
                }
                if (token === 'Y') {
                    return factory.createPolygonErc20YTokenTransactionManager();
                }
            default:
                return null;
        }
    } else if (tokenType === 'Erc721') {
        switch (network) {
            // case Networks.Ethereum:
            //     if (token === 'X') {
            //         return factory721.createEthereumErc721XTokenTransactionManager();
            //     }
            //     if (token === 'Y') {
            //         return factory721.createEthereumErc721YTokenTransactionManager();
            //     }
            // case Networks.Polygon:
            //     if (token === 'X') {
            //         return factory721.createPolygonErc721XTokenTransactionManager();
            //     }
            //     if (token === 'Y') {
            //         return factory721.createPolygonErc721YTokenTransactionManager();
            //     }
            default:
                return null;
        }
    } else {
        return null;
    }
}

