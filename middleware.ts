import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

// Specify protected routes
const protectedRoutes = ['/dashboard','/home'];

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const path = url.pathname;

  const isProtectedRoute = protectedRoutes.includes(path);

  const token = cookies().get('authToken')?.value;
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/protected/:path*','/home'],
};
