import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

// Protected routes config
const protectedRoutes = {
  '/api/users': ['USER', 'MERCHANT', 'ADMIN'],
  '/api/activities': {
    POST: ['MERCHANT', 'ADMIN'],
    PUT: ['MERCHANT', 'ADMIN'],
    DELETE: ['MERCHANT', 'ADMIN']
  },
  '/api/bookings': ['USER', 'MERCHANT', 'ADMIN'],
  '/api/merchant': ['MERCHANT', 'ADMIN']
};

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Check if route needs protection
  const needsAuth = Object.keys(protectedRoutes).some(route => 
    path.startsWith(route)
  );

  if (!needsAuth) {
    return NextResponse.next();
  }

  // Get token from cookie
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json(
      { error: '請先登入' },
      { status: 401 }
    );
  }

  // Verify token
  const payload = verifyToken(token);
  if (!payload) {
    return NextResponse.json(
      { error: 'Token 無效或已過期' },
      { status: 401 }
    );
  }

  // Check role permissions
  for (const [route, permissions] of Object.entries(protectedRoutes)) {
    if (path.startsWith(route)) {
      if (typeof permissions === 'object' && !Array.isArray(permissions)) {
        // Method-specific permissions
        const method = request.method;
        const allowedRoles = permissions[method as keyof typeof permissions];
        if (allowedRoles && !allowedRoles.includes(payload.role)) {
          return NextResponse.json(
            { error: '無權限執行此操作' },
            { status: 403 }
          );
        }
      } else if (!permissions.includes(payload.role)) {
        // General route permissions
        return NextResponse.json(
          { error: '無權限訪問' },
          { status: 403 }
        );
      }
    }
  }

  // Add user info to headers for use in API routes
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-user-id', payload.id);
  requestHeaders.set('x-user-email', payload.email);
  requestHeaders.set('x-user-role', payload.role);

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

export const config = {
  matcher: '/api/:path*'
};