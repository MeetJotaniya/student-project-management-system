import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getStudentNotifications } from '../../../../lib/student';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get('user');

    if (!userCookie) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = JSON.parse(userCookie.value);
    if (user.role !== 'student') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const notifications = await getStudentNotifications(user.id);
    return NextResponse.json(notifications);
  } catch (error) {
    console.error('Error fetching student notifications:', error);
    return NextResponse.json({ error: 'Failed to fetch notifications' }, { status: 500 });
  }
}

// Mark as read — no-op since we derive from meetings now
export async function PATCH() {
  return NextResponse.json({ success: true });
}

// Clear all — no-op
export async function DELETE() {
  return NextResponse.json({ success: true });
}
