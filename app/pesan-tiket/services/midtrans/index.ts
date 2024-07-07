import axios from 'axios';

type TransactionData = {
    id_payment: string;
    amount: number;
    first_name: string;
    last_name: string;
    phone: string;
}

const authHeader = 'Basic U0ItTWlkLXNlcnZlci1UT3ExYTJBVnVpeWhoT2p2ZnMzVV7LZU87';
const url = 'https://app.sandbox.midtrans.com/snap/v1/transactions';

export default async function MidtransService(data: TransactionData) {
    const requestData = {
        transaction_details: {
            order_id: data.id_payment,
            gross_amount: data.amount,
        },
        credit_card: {
            secure: true,
        },
        customer_details: {
            first_name: data.first_name,
            last_name: data.last_name,
            phone: data.phone,
        },
    };

    try {
        const response = await axios.post(url, requestData, {
            headers: {
                'Accept': 'application/json',
                'Authorization': authHeader,
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error: any) {
        console.error('Error creating transaction:', error);
        throw new Error('Transaction failed');
    }
}
