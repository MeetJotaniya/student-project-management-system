import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getStudentDeadlines } from '../../../../lib/student';

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
    
    if (user.role !== 'student') {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    const deadlines = await getStudentDeadlines(user.id);
    return NextResponse.json(deadlines);
  } catch (error) {
    console.error('Error fetching student deadlines:', error);
    return NextResponse.json(
      { error: 'Failed to fetch deadlines' },
      { status: 500 }
    );
  }
}
