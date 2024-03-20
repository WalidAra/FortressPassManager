import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: Request) {
  const cookieStore = cookies();
  const isUser = cookieStore.get("fortress-token");
  if (isUser) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/sign-in", request.url));
}

export const config = {
  matcher: ["/profile", "/"],
};
