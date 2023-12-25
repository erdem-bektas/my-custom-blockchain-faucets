import type { NextApiRequest, NextApiResponse } from 'next';
import { tokenTransactionServiceFactory } from '@/factory/tokenTransactionServiceFactory';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { CreateTokenTransactionDto } from '@/dto/CreateTokenTransactionDto';

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
        const tokenTransactionService = tokenTransactionServiceFactory();
        const input = plainToInstance(CreateTokenTransactionDto, req.body);
        const errors = await validate(input);

        if (errors.length > 0) {
            const errorMessages = errors.map(error => Object.values(error.constraints)).join(', ');
            res.status(HttpStatus.BadRequest).json({ error: errorMessages });
            return;
        }

        const savedTransaction = await tokenTransactionService.createTokenTransaction(input);
        res.status(HttpStatus.OK).json(savedTransaction);
    } catch (error) {
        console.error('Error in create-token-transaction:', error);
        res.status(HttpStatus.InternalServerError).json({ message: 'Internal Server Error' });
    }
}
