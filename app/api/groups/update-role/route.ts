import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { updateMemberRole } from '../../../../lib/groups';

export async function PATCH(request: Request) {
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

    const body = await request.json();
    const { memberId, role } = body;

    const updatedMember = await updateMemberRole(memberId, role, user.id);
    return NextResponse.json(updatedMember);
  } catch (error: any) {
    console.error('Error updating member role:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update role' },
      { status: 500 }
    );
  }
}
