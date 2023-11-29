import prisma from '@/lib/prisma';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const res = await prisma.task.findMany({
    where: { userId: 'clpdfqawj000014ocbrzn4yho' },
    orderBy: { createdAt: 'asc' },
  });
  return NextResponse.json(res);
}
