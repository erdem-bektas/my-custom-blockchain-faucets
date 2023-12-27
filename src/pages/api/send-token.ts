import type { NextApiRequest, NextApiResponse } from 'next';
import { Erc20TokenTransactionManagerFactory } from '@/factory/Erc20TokenTransactionManagerFactory';
import { AppDataSource } from '@/lib/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            await AppDataSource.initialize();

            const { network, userAddress, amount } = req.body;

            const tokenTransactionManager = getTokenTransactionManager(network);
            if (!tokenTransactionManager) {
                return res.status(400).json({ message: 'Invalid or missing network type' });
            }

            tokenTransactionManager.send(userAddress, amount)
                .then((savedTransaction) => {
                    console.log("The transfer was successful and the transaction was recorded.");
                    res.status(200).json(savedTransaction);
                })
                .catch(error => {
                    console.error("Error occurred during transfer:", error);
                    res.status(500).json(error);
                });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}

function getTokenTransactionManager(network: string) {
    const factory = new Erc20TokenTransactionManagerFactory();

    switch (network) {
        case 'Ethereum':
            return factory.createEthereumTokenTransactionManager();
        case 'Polygon':
            return factory.createPolygonTokenTransactionManager();
        default:
            return null;
    }
}
