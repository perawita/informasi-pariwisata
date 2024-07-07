const midtransClient = require('midtrans-client');

export default function Midtrans() {
    const snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: process.env.MIDTRANS_SERVER_KEY,
        clientKey: process.env.MIDTRANS_CLIENT_KEY
    });

    const get_token = async (data) => {

        const parameter = {
            "transaction_details": {
                "order_id": data.id_payment,
                "gross_amount": parseInt(data.amount)
            },
            "credit_card": {
                "secure": true
            },
            "customer_details": {
                "first_name": data.first_name,
                "last_name": data.last_name,
                "email": "budi.pra@example.com",
                "phone": data.phone
            }
        };

        const transaction = await snap.createTransaction(parameter);
        const transaction_token = transaction.token;
        return transaction_token;
    }

    return { get_token };
}
