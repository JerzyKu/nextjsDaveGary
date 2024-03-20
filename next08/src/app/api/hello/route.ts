import { NextResponse } from "next/server";
import { limiter } from "../config/limiter";

export async function GET(request: Request) {

  const origin = request.headers.get('origin')

  const remaning = await limiter.removeTokens(1);

  console.log("remaning: ", remaning);

  if (remaning < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Too Many Requests",
      headers: {
        "Access-Control-Allow-Origin": origin || '*',
        "Content-Type": "test/plain"
      }
    });
  }

  return new Response("Hello, Next.js!");
}
