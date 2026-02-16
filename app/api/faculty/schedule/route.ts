import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getFacultySchedule } from '../../../../lib/faculty';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get('user');
    
    if (!userCookie) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const user = JSON.parse(userCookie.value);
    
    if (user.role !== 'faculty') {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    const schedule = await getFacultySchedule(user.id);
    return NextResponse.json(schedule);
  } catch (error) {
    console.error('Error fetching faculty schedule:', error);
    return NextResponse.json(
      { error: 'Failed to fetch schedule' },
      { status: 500 }
    );
  }
}
