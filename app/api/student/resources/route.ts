import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';

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

    const member = await prisma.projectgroupmember.findFirst({
      where: { studentid: user.id },
      include: {
        projectgroup: {
          where: { status: 'approved' }
        }
      }
    });

    if (!member?.projectgroup) {
      return NextResponse.json({ group: null, githubUrl: null });
    }

    return NextResponse.json({
      group: {
        groupId: member.projectgroup.projectgroupid,
        groupName: member.projectgroup.projectgroupname
      },
      githubUrl: (member.projectgroup as any).githuburl ?? null
    });
  } catch (error) {
    console.error('Error fetching resources:', error);
    return NextResponse.json(
      { error: 'Failed to fetch resources' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
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

    const body = await request.json();
    const { githubUrl } = body;

    const member = await prisma.projectgroupmember.findFirst({
      where: { studentid: user.id },
      include: {
        projectgroup: {
          where: { status: 'approved' }
        }
      }
    });

    if (!member?.projectgroup) {
      return NextResponse.json(
        { error: 'You must be in an approved group to add repository link' },
        { status: 400 }
      );
    }

    await prisma.projectgroup.update({
      where: { projectgroupid: member.projectgroup.projectgroupid },
     data: { githuburl: githubUrl || null } as any
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating repository:', error);
    return NextResponse.json(
      { error: 'Failed to update repository link' },
      { status: 500 }
    );
  }
}
