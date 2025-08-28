import { headers } from 'next/headers';
import { prisma } from '@/lib/prisma';

export async function getCurrentUser() {
  const headersList = headers();
  const userId = headersList.get('x-user-id');
  
  if (!userId) {
    return null;
  }

  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      currentPoints: true
    }
  });
}