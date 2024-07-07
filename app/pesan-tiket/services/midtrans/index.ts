const midtransClient = require('midtrans-client');

type ResponseData = {
  message: string;
  token?: string;
  error?: string;
};

type TransactionData = {
    id_payment: string;
    amount: number;
    first_name: string;
    last_name: string;
    phone: string;
}

const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY as string,
});

export default async function midtransService(data: TransactionData): Promise<ResponseData> {
    const parameter = {
        "transaction_details": {
            "order_id": data.id_payment,
            "gross_amount": data.amount,
        },
        "credit_card": {
            "secure": true,
        },
        "customer_details": {
            "first_name": data.first_name,
            "last_name": data.last_name,
            "phone": data.phone,
        },
    };

    try {
        const transaction = await snap.createTransaction(parameter);
        const transactionToken = transaction.token;
        console.log('Transaction token:', transactionToken);
        return { message: 'Transaction successful', token: transactionToken };
    } catch (error: any) {
        console.error('Error creating transaction:', error);
        throw new Error('Transaction failed');
    }
}
