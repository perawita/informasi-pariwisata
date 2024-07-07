const midtransClient = require('midtrans-client');
import type { NextApiRequest, NextApiResponse } from 'next';
 
type ResponseData = {
  message: string;
  token?: string;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    console.log('Incoming request:', req.body); // Logging permintaan yang masuk

    let snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY as string,
    });

    let parameter = {
        "transaction_details": {
            "order_id": req.body.id_payment,
            "gross_amount": parseInt(req.body.amount),
        },
        "credit_card": {
            "secure": true,
        },
        "customer_details": {
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "phone": req.body.phone,
        },
    };

    try {
        const transaction = await snap.createTransaction(parameter);
        let transactionToken = transaction.token;
        console.log('Transaction token:', transactionToken);
        res.status(200).json({ message: 'Transaction successful', token: transactionToken });
    } catch (error: any) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ message: 'Transaction failed', error: error.message });
    }
}
