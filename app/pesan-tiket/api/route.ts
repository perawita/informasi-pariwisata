// pages/api/transaction.ts

import { NextApiRequest, NextApiResponse } from 'next';
import MidtransService from '../services/midtrans';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const requestData = {
            id_payment: req.body.id_payment,
            amount: req.body.amount,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone: req.body.phone,
        };

        try {
            const response = await MidtransService(requestData);
            res.status(200).json(response);
        } catch (error) {
            console.error('Error processing transaction:', error);
            res.status(500).json({ error: 'Transaction failed' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
