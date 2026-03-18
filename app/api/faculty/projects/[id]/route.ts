import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import { getProjectProgress } from '@/lib/progress';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const cookieStore = await cookies();
        const userCookie = cookieStore.get('user');

        if (!userCookie) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const user = JSON.parse(userCookie.value);
        if (user.role !== 'faculty') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const projectId = parseInt(id);

        const project = await prisma.projectgroup.findUnique({
            where: {
                projectgroupid: projectId
            },
            include: {
                projecttype: true,
                projectgroupmember: {
                    include: {
                        student: true
                    }
                },
                projectmeeting: {
                    orderBy: {
                        meetingdatetime: 'desc'
                    }
                },
                grade: true
            }
        });

        if (!project) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 });
        }

        // Try to find the original group request to get technologies and subject description
        const groupReq = await prisma.grouprequest.findFirst({
            where: {
                groupname: project.projectgroupname || ''
            }
        });

        // Verify faculty belongs to this project
        if (project.convenerstaffid !== user.id && project.expertstaffid !== user.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const progress = getProjectProgress(project);

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

        const gradesArray = project.grade || [];

        return NextResponse.json({
            id: project.projectgroupid,
            title: project.projecttitle || 'Untitled Project',
            description: project.projectdescription || project.description || 'No description provided.',
            area: project.projectarea || 'Unspecified Area',
            status: project.status,
            type: project.projecttype?.projecttypename || 'Standard project',
            team: project.projectgroupname,
            members: project.projectgroupmember.length,
            progress,
            githubUrl: (project as any).githuburl || null,
            technologies: groupReq?.technologies || 'Not specified',
            subjectDescription: groupReq?.projectdescription || project.projectdescription || 'No detailed subject description available.',
            teamMembers: project.projectgroupmember.map(m => ({
                id: m.student?.studentid,
                name: m.student?.studentname,
                email: m.student?.email,
                phone: m.student?.phone || 'N/A',
                cgpa: m.studentcgpa ? m.studentcgpa.toFixed(2) : 'N/A',
                isLeader: m.isgroupleader
            })),
            meetings: project.projectmeeting.map(m => ({
                id: m.projectmeetingid,
                purpose: m.meetingpurpose,
                date: m.meetingdatetime,
                time: m.meetingdatetime ? m.meetingdatetime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A',
                location: m.meetinglocation,
                status: m.meetingstatus || undefined
            })),
            grades: {
                phase1: statusMap[gradesArray.find(g => g.component === 'PHASE_1')?.marks ?? 0] || 'Not Completed',
                phase2: statusMap[gradesArray.find(g => g.component === 'PHASE_2')?.marks ?? 0] || 'Not Completed',
                phase3: statusMap[gradesArray.find(g => g.component === 'PHASE_3')?.marks ?? 0] || 'Not Completed',
                finalGrade: gradeMap[gradesArray.find(g => g.component === 'FINAL_GRADE')?.marks ?? 0] || '-'
            }
        });
    } catch (error) {
        console.error('Error fetching project details:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
