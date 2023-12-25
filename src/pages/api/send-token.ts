import type { NextApiRequest, NextApiResponse } from 'next'
import { tokenTransactionServiceFactory } from '@/factory/tokenTransactionServiceFactory';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("req.body", req.body)
    if (req.method === 'POST') {
        try {
            const tokenTransactionService = tokenTransactionServiceFactory();
            const savedTransaction = await tokenTransactionService.createTokenTransaction(req.body);

            res.status(200).json(savedTransaction);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
