import { NextResponse } from "next/server";
import Midtrans, {get_token} from "@/lib/midtrans";

export async function GET(){
    const data = {
        name: 'Bishal Shrestha',
        age: '27'
    }

    return NextResponse.json({data})
}

export async function POST(req,res){
  const data  = await req.json()
  const response = (await Midtrans()).get_token(data);
  return NextResponse.json(response)
}