import type { NextApiRequest, NextApiResponse } from 'next'

import config from '@/config'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   
    console.log("method: ", req.method);
    console.log("body: ", req.body);
 
    res.status(200).json({ status: true, body: req.body, });
}

