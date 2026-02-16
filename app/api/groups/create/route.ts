import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createGroupRequest } from '../../../../lib/groups';

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
    
    if (user.role !== 'student') {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    const body = await request.json();
    
    const request_data = await createGroupRequest({
      ...body,
      leaderId: user.id
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Group request submitted successfully. Waiting for admin approval.',
      requestId: request_data.requestid
    });
  } catch (error: any) {
    console.error('Error creating group request:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create group request' },
      { status: 500 }
    );
  }
}
