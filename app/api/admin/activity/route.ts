import { NextResponse } from 'next/server';
import { getRecentActivity } from '../../../../lib/admin';

export async function GET() {
  try {
    const activities = await getRecentActivity();
    return NextResponse.json(activities);
  } catch (error) {
    console.error('Error fetching recent activity:', error);
    return NextResponse.json(
      { error: 'Failed to fetch activities' },
      { status: 500 }
    );
  }
}
