import type { NextRequest } from "next/server";

export function middleware(_req: NextRequest) {
  // TODO: implement auth checks
  return;
}

export const config = {
  matcher: ["/app/:path*"],
};
