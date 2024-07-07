import { NextApiResponse } from "next";
import { NextRequest } from "next/server";


export function GET(req: NextRequest, res: NextApiResponse)
{
    return 'hello';
}