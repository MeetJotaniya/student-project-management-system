import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '../../../../lib/prisma';

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

    // Get all project groups assigned to this faculty
    const projectGroups = await prisma.projectgroup.findMany({
      where: {
        OR: [
          { convenerstaffid: user.id },
          { expertstaffid: user.id }
        ]
      },
      include: {
        projectgroupmember: {
          include: {
            student: true
          }
        }
      }
    });

    // Structure data by group
    const groupsWithStudents = projectGroups.map(group => ({
      groupId: group.projectgroupid,
      groupName: group.projectgroupname || 'Unnamed Group',
      projectTitle: group.projecttitle || 'Untitled Project',
      status: group.status || 'Pending',
      students: group.projectgroupmember
        .filter(member => member.student !== null)
        .map(member => ({
          studentId: member.student!.studentid,
          studentName: member.student!.studentname,
          email: member.student!.email,
          phone: member.student!.phone || '',
          isLeader: member.isgroupleader || false,
          cgpa: member.studentcgpa || null
        }))
    }));

    return NextResponse.json(groupsWithStudents);
  } catch (error) {
    console.error('Error fetching students:', error);
    return NextResponse.json({ error: 'Failed to fetch students' }, { status: 500 });
  }
}
