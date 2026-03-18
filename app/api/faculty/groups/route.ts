import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getFacultyGroups } from '../../../../lib/faculty';

export async function GET() {
    try {
        const cookieStore = await cookies();
        const userCookie = cookieStore.get('user');

        if (!userCookie) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const user = JSON.parse(userCookie.value);

        if (user.role !== 'faculty') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const groups = await getFacultyGroups(user.id);
        return NextResponse.json(groups);
    } catch (error) {
        console.error('Error fetching faculty groups:', error);
        return NextResponse.json({ error: 'Failed to fetch groups' }, { status: 500 });
    }
}
