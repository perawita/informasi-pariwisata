import { NextResponse } from "next/server";
import Twilio from "@/lib/twilio";

export async function POST(req, res) {
  try {
      const data = await req.json();
      const twilio = Twilio();
      const response = await twilio.send_wa(data);
      return NextResponse.json({ massage: response });
  } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
  }
}