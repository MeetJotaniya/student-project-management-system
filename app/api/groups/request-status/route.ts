import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getStudentGroupRequest } from '../../../../lib/groups';

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

    const request = await getStudentGroupRequest(user.id);
    return NextResponse.json(request);
  } catch (error) {
    console.error('Error fetching request status:', error);
    return NextResponse.json(
      { error: 'Failed to fetch request status' },
      { status: 500 }
    );
  }
}
