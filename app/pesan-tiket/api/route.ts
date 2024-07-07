import type { NextApiRequest, NextApiResponse } from 'next';
import midtrans_service from "./services/midtrans/index";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    console.log('POST request received');
    return await midtrans_service(req, res);
}
