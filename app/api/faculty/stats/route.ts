import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getFacultyStats } from '../../../../lib/faculty';

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

    const stats = await getFacultyStats(user.id);
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching faculty stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}
