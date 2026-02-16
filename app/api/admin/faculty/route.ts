import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET(request: NextRequest) {
    try {
        const faculty = await prisma.staff.findMany({
            where: {
                OR: [
                    { role: 'faculty' },
                    { role: 'coordinator' },
                    { role: 'admin' }
                ]
            },
            orderBy: { created: 'desc' },
            select: {
                staffid: true,
                staffname: true,
                email: true,
                phone: true,
                role: true,
                description: true,
                created: true,
            }
        });

        return NextResponse.json({ faculty });
    } catch (error) {
        console.error('Error fetching faculty:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
