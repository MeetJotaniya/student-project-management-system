import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getPendingGroupRequests } from '../../../../lib/groups';

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
    
    if (user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    const requests = await getPendingGroupRequests();
    return NextResponse.json(requests);
  } catch (error) {
    console.error('Error fetching group requests:', error);
    return NextResponse.json(
      { error: 'Failed to fetch group requests' },
      { status: 500 }
    );
  }
}
