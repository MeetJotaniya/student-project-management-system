import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getFacultyApprovals } from '../../../../lib/faculty';

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

    const approvals = await getFacultyApprovals(user.id);
    return NextResponse.json(approvals);
  } catch (error) {
    console.error('Error fetching faculty approvals:', error);
    return NextResponse.json(
      { error: 'Failed to fetch approvals' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
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

    const { id, action } = await request.json();

    // Handle approval/rejection logic here
    // For now, just return success
    console.log(`Faculty ${user.id} ${action}ed approval ${id}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing approval action:', error);
    return NextResponse.json(
      { error: 'Failed to process action' },
      { status: 500 }
    );
  }
}
