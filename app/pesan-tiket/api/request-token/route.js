// Import necessary packages
const midtransClient = require('midtrans-client');

export async function POST(req, res) {
  if (req.method === 'POST') {
    // Initialize Snap API instance
    let snap = new midtransClient.Snap({
      // Set to true if you want Production Environment (accept real transaction).
      isProduction: false,
      serverKey: process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY
    });

    // Example transaction parameters
    let parameter = {
      "transaction_details": {
        "order_id": req.body.id_payment,
        "gross_amount": parseInt(req.body.amount)
      },
      "credit_card": {
        "secure": true
      },
      "customer_details": {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "phone": req.body.phone
      }
    };

    // Create transaction using Snap API
    snap.createTransaction(parameter)
      .then((transaction) => {
        // Transaction token
        let transactionToken = transaction.token;
        console.log('Transaction Token:', transactionToken);
        res.status(200).json({ transactionToken });
      })
      .catch((error) => {
        console.error('Error creating transaction:', error.message);
        res.status(500).json({ error: 'Internal server error' });
      });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export async function OPTIONS(req) {}