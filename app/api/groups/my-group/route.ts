import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getStudentGroup } from '../../../../lib/groups';

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

    const group = await getStudentGroup(user.id);
    return NextResponse.json(group);
  } catch (error) {
    console.error('Error fetching student group:', error);
    return NextResponse.json(
      { error: 'Failed to fetch group' },
      { status: 500 }
    );
  }
}
