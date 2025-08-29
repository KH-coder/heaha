import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword, generateToken } from '@/lib/auth';
import { z } from 'zod';

// Validation schemas
const userRegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2),
  phone: z.string().optional()
});

const merchantRegisterSchema = userRegisterSchema.extend({
  businessName: z.string().min(2),
  businessPhone: z.string(),
  address: z.string(),
  district: z.string()
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { role = 'USER', ...data } = body;

    // Validate based on role
    if (role === 'MERCHANT') {
      merchantRegisterSchema.parse(data);
    } else {
      userRegisterSchema.parse(data);
    }

    // Check if user exists
    const exists = await prisma.user.findFirst({
      where: {
        OR: [
          { email: data.email },
          ...(data.phone ? [{ phone: data.phone }] : [])
        ]
      }
    });

    if (exists) {
      return NextResponse.json(
        { error: '用戶已存在' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(data.password);

    // Create user
    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name,
        phone: data.phone,
        role,
        // 普通用戶送 50 點
        currentPoints: role === 'USER' ? 50 : 0
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        currentPoints: true
      }
    });

    // Generate token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role
    });

    // Set cookie
    const response = NextResponse.json({
      success: true,
      user,
      token
    });

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return response;

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: '輸入資料無效', details: error },
        { status: 400 }
      );
    }

    console.error('Register error:', error);
    return NextResponse.json(
      { error: '註冊失敗' },
      { status: 500 }
    );
  }
}