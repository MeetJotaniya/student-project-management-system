import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { approveGroupRequest } from '../../../../lib/groups';

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
    const { requestId } = body;

    const group = await approveGroupRequest(requestId, user.id);
    return NextResponse.json({ success: true, group });
  } catch (error: any) {
    console.error('Error approving group:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to approve group' },
      { status: 500 }
    );
  }
}
