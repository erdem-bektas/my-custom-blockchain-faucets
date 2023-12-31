import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { CreateTokenTransactionDto } from '@/dto/CreateTokenTransactionDto';

enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    MethodNotAllowed = 405,
    InternalServerError = 500,
}

export async function validateCreateTokenTransaction(req: NextApiRequest, res: NextApiResponse, next: NextApiHandler) {
    const input = plainToInstance(CreateTokenTransactionDto, req.body);
    const errors = await validate(input);

    if (errors.length > 0) {
        const errorMessages = errors.map(error =>
            error.constraints ? Object.values(error.constraints).join(', ') : ''
        ).filter(message => message.length > 0).join(', ');

        res.status(HttpStatus.BadRequest).json({ error: errorMessages });
        return;
    }

    next(req, res);
}
