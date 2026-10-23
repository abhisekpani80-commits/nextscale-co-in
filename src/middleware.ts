import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() || "";
  const { pathname } = request.nextUrl;

  // Handle subdomain: abhisekpani.nextscale.co.in
  const isFounderSubdomain =
    host.startsWith("abhisekpani.") || host === "abhisekpani.nextscale.co.in";

  if (isFounderSubdomain) {
    // Route root / directly to the dedicated founder profile
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/about/abhisek-pani", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt, or files with extensions
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
