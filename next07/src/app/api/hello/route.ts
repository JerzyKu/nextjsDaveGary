import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json( {'ala': "Hello, next.js!"})
}