// middleware.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function middleware(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken')?.value;

  // If there's no token, redirect to the login page
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Verify the token (make sure to replace with your secret)
    jwt.verify(token, process.env.JWT_SECRET!);
    // If token is valid, allow the request to continue
    return NextResponse.next();
  } catch (err) {
    // If token is invalid, redirect to the login page
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Define the paths where this middleware should run
export const config = {
  matcher: ['/dashboard/:path*', '/protected/:path*'], // Adjust paths as needed
};
