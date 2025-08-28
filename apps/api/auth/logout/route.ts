import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const response = NextResponse.json({
    success: true,
    message: '已成功登出'
  });

  // Clear the token cookie
  response.cookies.delete('token');
  
  // Alternative: Set expired cookie
  // response.cookies.set('token', '', {
  //   httpOnly: true,
  //   expires: new Date(0)
  // });

  return response;
}