import { NextResponse } from "next/server";
import Midtrans from "@/lib/midtrans";

export async function POST(req, res) {
  try {
      const data = await req.json();
      const midtrans = Midtrans();
      const response = await midtrans.get_ticket(data);
      return NextResponse.json({ token: response });
  } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
  }
}