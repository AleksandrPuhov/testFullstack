import { withAuth } from "next-auth/middleware";
import { type NextRequest, NextResponse } from "next/server";

export default withAuth(
  function middleware(request: NextRequest) {
    const url = new URL(request.url);

    if (
      request.method === "GET" &&
      url.pathname.match(/^\/api\/model\/user\/?$/)
    ) {
      return NextResponse.json({ error: "Not allowed" }, { status: 405 });
    }
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (
          req.nextUrl.pathname !== "/login" &&
          req.nextUrl.pathname !== "/join" &&
          token === null
        ) {
          return false;
        }

        return true;
      },
    },
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/api/model/:path*",
  ],
};
