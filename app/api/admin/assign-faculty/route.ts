import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { assignFacultyToGroup } from '../../../../lib/groups';

export async function POST(request: Request) {
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
    
    if (user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { groupId, convenerId, expertId } = body;

    const updatedGroup = await assignFacultyToGroup(groupId, convenerId, expertId);
    return NextResponse.json(updatedGroup);
  } catch (error: any) {
    console.error('Error assigning faculty:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to assign faculty' },
      { status: 500 }
    );
  }
}
