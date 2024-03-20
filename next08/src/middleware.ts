import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yousite.com", "https://yousite.com"]
    : ["http://localhost:3000", "https://www.google.com"];

export default function middleware(request: Request) {
  const origin = request.headers.get("origin");
  console.log("origin: ", origin);

  if (origin && !allowedOrigins.includes(origin)) { // || !origin <- blocks api tools that have no origin, exaplle: thunderclient or postman 
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "test/plain",
      },
    });
  }

  // const regex = new RegExp('/api/*')
  // if(regex.test(request.url)){}

  // if(request.url.includes('/api/')){}

  console.log("Middleware !!! ");
  console.log(request.method);
  console.log(request.url);

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
