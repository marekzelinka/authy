import { auth } from "@/lib/auth";
import {
  NextResponse,
  type MiddlewareConfig,
  type NextMiddleware,
} from "next/server";

export const middleware: NextMiddleware = async (request) => {
  const session = await auth();
  const protectedRoutes = [
    "/dashboard",
    "/dashboard/settings",
    "/dashboard/profile",
  ];

  const isProtectedRoute = protectedRoutes.map((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  if (!isProtectedRoute && !session) {
    const redirectUrl = new URL("/login", request.url);

    return NextResponse.redirect(redirectUrl);
  }

  if (!session && isProtectedRoute) {
    const redirectUrl = new URL("/login", request.url);

    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/:path*", "/api/dashboard/:path*"],
} satisfies MiddlewareConfig;
