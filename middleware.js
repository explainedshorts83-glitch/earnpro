import { NextResponse } from "next/server";

export function middleware(request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const expires = url.searchParams.get("expires");

  // Agar token ya expires missing hai
  if (!token || !expires) {
    return new NextResponse("❌ Access Denied - Invalid Link", { status: 403 });
  }

  // Expiry check
  const now = Date.now();
  if (now > Number(expires)) {
    return new NextResponse("⏰ This link has expired!", { status: 403 });
  }

  // Agar sab sahi hai
  return NextResponse.next();
}
