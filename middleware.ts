// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Cookies from 'js-cookie';

export function middleware(request: NextRequest) {
  // Access the session cookie
  const sessionCookie =  Cookies.get('authToken');
  if(sessionCookie){
    console.log("cookies",sessionCookie)
  }
  console.log(sessionCookie);

  // Define protected routes
  const protectedRoutes = ['/dashboard', '/profile'];
  const isProtectedRoute = protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route));

  if (isProtectedRoute && !sessionCookie) {
    // If the route is protected and no session cookie is found, redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If authenticated or if it's a public route, proceed
  return NextResponse.next();
}

// Config to match the routes where the middleware should run
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/login'],
};
