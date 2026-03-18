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

    // Status mapping helpers
    const statusMap: Record<number, string> = {
      0: 'Not Completed',
      1: 'Partially Completed',
      2: 'Completed'
    };

    const gradeMap: Record<number, string> = {
      1: 'A',
      2: 'B',
      3: 'C',
      4: 'D',
      5: 'F'
    };

    // Get all students in groups assigned to this faculty, along with their grades
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
        },
        grade: {
          where: {
            facultyid: user.id
          }
        },
        projectmeeting: true
      }
    });

    // Build student grading data from real DB data
    const students = projectGroups.flatMap(group => {
      return group.projectgroupmember
        .filter(member => member.student !== null)
        .map(member => {
          const student = member.student!;

          // Get phase statuses for this student's group
          const p1 = group.grade.find(g => g.component === 'PHASE_1')?.marks ?? 0;
          const p2 = group.grade.find(g => g.component === 'PHASE_2')?.marks ?? 0;
          const p3 = group.grade.find(g => g.component === 'PHASE_3')?.marks ?? 0;
          const finalGradeVal = group.grade.find(g => g.component === 'FINAL_GRADE')?.marks ?? 0;

          // Calculate overall completion based on phases (3 phases = 100%)
          // Phase status: 2 = 100%, 1 = 50%, 0 = 0% for that phase
          const phasePoints = (p1 === 2 ? 1 : p1 === 1 ? 0.5 : 0) +
            (p2 === 2 ? 1 : p2 === 1 ? 0.5 : 0) +
            (p3 === 2 ? 1 : p3 === 1 ? 0.5 : 0);
          const progress = Math.round((phasePoints / 3) * 100);

          return {
            id: student.studentid,
            studentId: student.studentid,
            studentName: student.studentname,
            email: student.email,
            role: member.isgroupleader ? 'Team Leader' : 'Member',
            phase1: statusMap[p1] || 'Not Completed',
            phase2: statusMap[p2] || 'Not Completed',
            phase3: statusMap[p3] || 'Not Completed',
            finalGrade: gradeMap[finalGradeVal] || '-',
            progress,
            groupName: group.projectgroupname || 'Unknown Group',
            groupId: group.projectgroupid
          };
        });
    });

    return NextResponse.json(students);
  } catch (error: any) {
    require('fs').writeFileSync('C:/Users/meetj/Desktop/SEM 6/Student_Project_Management_System/student-project-management-system/student-project-management-system/grading_error.txt', String(error.message) + '\n' + String(error.stack));
    console.error('Error fetching grading data:', error);
    return NextResponse.json({ error: 'Failed to fetch grading data' }, { status: 500 });
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

    const { grades } = await request.json();

    // Reverse mapping for saving
    const statusToVal: Record<string, number> = {
      'Not Completed': 0,
      'Partially Completed': 1,
      'Completed': 2
    };

    const gradeToVal: Record<string, number> = {
      'A': 1,
      'B': 2,
      'C': 3,
      'D': 4,
      'F': 5
    };

    // Save/update grade records for each student
    for (const studentGrade of grades) {
      const { groupId, phase1, phase2, phase3, finalGrade } = studentGrade;

      if (!groupId) continue;

      const components = [
        { name: 'PHASE_1', val: statusToVal[phase1] ?? 0 },
        { name: 'PHASE_2', val: statusToVal[phase2] ?? 0 },
        { name: 'PHASE_3', val: statusToVal[phase3] ?? 0 },
        { name: 'FINAL_GRADE', val: gradeToVal[finalGrade] ?? 0 }
      ];

      for (const comp of components) {
        await prisma.grade.upsert({
          where: {
            projectgroupid_component: {
              projectgroupid: groupId,
              component: comp.name
            }
          },
          update: {
            marks: comp.val,
            maxmarks: comp.name === 'FINAL_GRADE' ? 5 : 2,
            modified: new Date(),
            facultyid: user.id
          },
          create: {
            projectgroupid: groupId,
            facultyid: user.id,
            component: comp.name,
            marks: comp.val,
            maxmarks: comp.name === 'FINAL_GRADE' ? 5 : 2
          }
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving grades:', error);
    return NextResponse.json({ error: 'Failed to save grades' }, { status: 500 });
  }
}

