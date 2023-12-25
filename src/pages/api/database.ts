import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/database';

type Data = {
    message: string;
    error?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        await connectToDatabase();
        res.status(200).json({ message: 'Database connected successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Database connection failed', error: error.message });
    }
}
