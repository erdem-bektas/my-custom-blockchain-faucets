import type { NextApiRequest, NextApiResponse } from 'next';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { CreateTokenTransactionDto } from '@/dto/CreateTokenTransactionDto';
import { Erc20TokenTransactionManagerFactory } from '@/factory/Erc20TokenTransactionManagerFactory';
import { AppDataSource } from '@/lib/database';

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
        const input = plainToInstance(CreateTokenTransactionDto, req.body);
        const errors = await validate(input);

        if (errors.length > 0) {
            const errorMessages = errors.map(error => Object.values(error.constraints)).join(', ');
            res.status(HttpStatus.BadRequest).json({ error: errorMessages });
            return;
        }

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
        console.error('Error in create-token-transaction:', error);
        res.status(HttpStatus.InternalServerError).json({ message: 'Internal Server Error' });
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

