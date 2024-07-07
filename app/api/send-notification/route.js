import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    return NextResponse.json({ massage: 'success' });
  } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
  }
}