import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '../../../../lib/prisma';

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

    // Find the student's project group and convener
    const projectMember = await prisma.projectgroupmember.findFirst({
      where: {
        studentid: user.id
      },
      include: {
        projectgroup: {
          where: {
            status: 'approved'
          },
          include: {
            staff_projectgroup_convenerstaffidTostaff: true
          }
        }
      }
    });

    if (!projectMember || !projectMember.projectgroup) {
      return NextResponse.json(
        { error: 'No project group found' },
        { status: 404 }
      );
    }

    const convener = projectMember.projectgroup.staff_projectgroup_convenerstaffidTostaff;

    if (!convener) {
      return NextResponse.json(
        { error: 'No convener assigned' },
        { status: 404 }
      );
    }

    // Return mentor info
    return NextResponse.json({
      name: convener.staffname,
      email: convener.email,
      phone: convener.phone || 'Not provided',
      office: 'Room 304, CS Building', // This field doesn't exist in DB, using default
      officeHours: 'Mon-Fri, 2:00 PM - 4:00 PM', // This field doesn't exist in DB, using default
      role: 'Project Convener'
    });
  } catch (error) {
    console.error('Error fetching mentor info:', error);
    return NextResponse.json(
      { error: 'Failed to fetch mentor info' },
      { status: 500 }
    );
  }
}
