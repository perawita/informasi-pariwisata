import { NextResponse } from "next/server";

export function GET(){
    console.log('GET');

    return NextResponse.json({massage: 'success'});
}