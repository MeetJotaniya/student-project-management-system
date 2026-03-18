import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getFacultyCalendarMeetings, createMeeting, getFacultyGroups } from '../../../../lib/faculty';

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get('user');

    if (!userCookie) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = JSON.parse(userCookie.value);

    if (user.role !== 'faculty') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const events = await getFacultyCalendarMeetings(user.id);
    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return NextResponse.json({ error: 'Failed to fetch calendar events' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get('user');

    if (!userCookie) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = JSON.parse(userCookie.value);

    if (user.role !== 'faculty') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const { projectgroupid, meetingdatetime, meetinglocation, meetingpurpose, meetingnotes } = body;

    if (!projectgroupid || !meetingdatetime || !meetinglocation || !meetingpurpose) {
      return NextResponse.json(
        { error: 'Missing required fields: projectgroupid, meetingdatetime, meetinglocation, meetingpurpose' },
        { status: 400 }
      );
    }

    const meeting = await createMeeting({
      staffId: user.id,
      projectgroupid: parseInt(projectgroupid),
      meetingdatetime,
      meetinglocation,
      meetingpurpose,
      meetingnotes
    });

    return NextResponse.json(meeting, { status: 201 });
  } catch (error) {
    console.error('Error creating meeting:', error);
    return NextResponse.json({ error: 'Failed to create meeting' }, { status: 500 });
  }
}
