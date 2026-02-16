import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET(request: NextRequest) {
    try {
        const students = await prisma.student.findMany({
            orderBy: { created: 'desc' },
            select: {
                studentid: true,
                studentname: true,
                email: true,
                phone: true,
                created: true,
            }
        });

        return NextResponse.json({ students });
    } catch (error) {
        console.error('Error fetching students:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
