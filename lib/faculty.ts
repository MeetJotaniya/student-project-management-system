import { prisma } from './prisma';
import { getProjectProgress } from './progress';

export async function getFacultyStats(staffId: number) {
  try {
    const [totalProjects, reviewsDue, activeStudents] = await Promise.all([
      // Total projects where faculty is either convener or expert
      prisma.projectgroup.count({
        where: {
          OR: [
            { convenerstaffid: staffId },
            { expertstaffid: staffId }
          ]
        }
      }),

      // Reviews due - meetings with pending status
      prisma.projectmeeting.count({
        where: {
          guidestaffid: staffId,
          meetingstatus: 'pending'
        }
      }),

      // Active students in faculty's projects
      prisma.projectgroupmember.count({
        where: {
          projectgroup: {
            OR: [
              { convenerstaffid: staffId },
              { expertstaffid: staffId }
            ]
          }
        }
      })
    ]);

    return {
      totalProjects,
      reviewsDue,
      activeStudents
    };
  } catch (error) {
    console.error('Error fetching faculty stats:', error);
    return {
      totalProjects: 0,
      reviewsDue: 0,
      activeStudents: 0
    };
  }
}

export async function getFacultyProjects(staffId: number) {
  try {
    const projects = await prisma.projectgroup.findMany({
      where: {
        OR: [
          { convenerstaffid: staffId },
          { expertstaffid: staffId }
        ]
      },
      include: {
        projecttype: true,
        projectgroupmember: {
          include: {
            student: true
          }
        },
        staff_projectgroup_convenerstaffidTostaff: true,
        staff_projectgroup_expertstaffidTostaff: true,
        projectmeeting: true
      },
      orderBy: {
        modified: 'desc'
      }
    });

    return projects.map(project => ({
      id: project.projectgroupid,
      title: project.projecttitle || 'Untitled Project',
      status: project.status === 'approved'
        ? (project.projectgroupmember.length > 0 ? 'active' : 'pending')
        : (project.status as any) || 'pending',
      progress: getProjectProgress({
    ...project,
    projectmeeting: project.projectmeeting.map((m) => ({
        ...m,
        meetingstatus: m.meetingstatus ?? undefined,
    })),
}),
      members: project.projectgroupmember.length,
      icon: project.projectgroupname?.charAt(0) || 'P',
      iconColor: getRandomColor(project.projectgroupid),
      description: project.projectdescription,
      area: project.projectarea,
      type: project.projecttype?.projecttypename
    }));
  } catch (error) {
    console.error('Error fetching faculty projects:', error);
    return [];
  }
}

export async function getFacultyApprovals(staffId: number) {
  try {
    // Get pending meetings that need approval
    const pendingMeetings = await prisma.projectmeeting.findMany({
      where: {
        guidestaffid: staffId,
        meetingstatus: 'pending'
      },
      include: {
        projectgroup: true
      },
      orderBy: {
        meetingdatetime: 'asc'
      },
      take: 5
    });

    // Get projects with pending status assigned to this faculty
    const pendingProposals = await prisma.projectgroup.findMany({
      where: {
        convenerstaffid: staffId,
        status: 'pending'
      },
      orderBy: {
        created: 'desc'
      },
      take: 3
    });

    const approvals = [
      ...pendingProposals.map(project => ({
        id: `proposal-${project.projectgroupid}`,
        type: 'proposal' as const,
        title: 'Project Proposal',
        description: project.projecttitle || 'Untitled Project',
        submittedBy: project.projectgroupname || 'Team',
        isNew: true
      })),
      ...pendingMeetings.map(meeting => ({
        id: `meeting-${meeting.projectmeetingid}`,
        type: 'extension' as const,
        title: 'Meeting Request',
        description: `${meeting.projectgroup?.projectgroupname || 'Team'}: ${meeting.meetingpurpose || 'Review'}`,
        isNew: false
      }))
    ];

    return approvals;
  } catch (error) {
    console.error('Error fetching faculty approvals:', error);
    return [];
  }
}

export async function getFacultySchedule(staffId: number) {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const meetings = await prisma.projectmeeting.findMany({
      where: {
        guidestaffid: staffId,
        meetingdatetime: {
          gte: today,
          lt: tomorrow
        }
      },
      include: {
        projectgroup: true
      },
      orderBy: {
        meetingdatetime: 'asc'
      }
    });

    return meetings.map(meeting => ({
      id: meeting.projectmeetingid.toString(),
      time: meeting.meetingdatetime
        ? new Date(meeting.meetingdatetime).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        })
        : 'TBD',
      title: `${meeting.projectgroup?.projectgroupname || 'Team'} Review`,
      location: meeting.meetinglocation || 'TBD',
      description: meeting.meetingpurpose
    }));
  } catch (error) {
    console.error('Error fetching faculty schedule:', error);
    return [];
  }
}

export async function getFacultyCalendarMeetings(staffId: number) {
  try {
    const meetings = await prisma.projectmeeting.findMany({
      where: {
        guidestaffid: staffId
      },
      include: {
        projectgroup: {
          include: {
            projectgroupmember: true
          }
        }
      },
      orderBy: {
        meetingdatetime: 'asc'
      }
    });

    return meetings.map(meeting => ({
      id: meeting.projectmeetingid.toString(),
      title: `${meeting.projectgroup?.projectgroupname || 'Team'} - ${meeting.meetingpurpose || 'Meeting'}`,
      date: meeting.meetingdatetime || new Date(),
      time: meeting.meetingdatetime
        ? new Date(meeting.meetingdatetime).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        })
        : 'TBD',
      location: meeting.meetinglocation || undefined,
      attendees: meeting.projectgroup?.projectgroupmember?.length || 0,
      type: meeting.meetingstatus === 'completed' ? 'review' as const
        : meeting.meetingstatus === 'cancelled' ? 'deadline' as const
          : 'meeting' as const,
      notes: meeting.meetingnotes || undefined,
      purpose: meeting.meetingpurpose || undefined,
      status: meeting.meetingstatus || 'scheduled',
      groupName: meeting.projectgroup?.projectgroupname || 'Unknown Group',
      groupId: meeting.projectgroupid
    }));
  } catch (error) {
    console.error('Error fetching faculty calendar meetings:', error);
    return [];
  }
}

export async function createMeeting(data: {
  staffId: number;
  projectgroupid: number;
  meetingdatetime: string;
  meetinglocation: string;
  meetingpurpose: string;
  meetingnotes?: string;
}) {
  try {
    const meeting = await prisma.projectmeeting.create({
      data: {
        projectgroupid: data.projectgroupid,
        guidestaffid: data.staffId,
        meetingdatetime: new Date(data.meetingdatetime),
        meetinglocation: data.meetinglocation,
        meetingpurpose: data.meetingpurpose,
        meetingnotes: data.meetingnotes || null,
        meetingstatus: 'scheduled',
        description: `Meeting scheduled at ${data.meetinglocation}`
      },
      include: {
        projectgroup: {
          include: {
            projectgroupmember: {
              include: {
                student: true
              }
            }
          }
        }
      }
    });

    return meeting;
  } catch (error) {
    console.error('Error creating meeting:', error);
    throw error;
  }
}

export async function getFacultyGroups(staffId: number) {
  try {
    const groups = await prisma.projectgroup.findMany({
      where: {
        OR: [
          { convenerstaffid: staffId },
          { expertstaffid: staffId }
        ]
      },
      select: {
        projectgroupid: true,
        projectgroupname: true,
        projecttitle: true,
        _count: {
          select: { projectgroupmember: true }
        }
      },
      orderBy: {
        projectgroupname: 'asc'
      }
    });

    return groups.map(g => ({
      id: g.projectgroupid,
      name: g.projectgroupname || 'Unnamed Group',
      title: g.projecttitle || 'Untitled Project',
      memberCount: g._count.projectgroupmember
    }));
  } catch (error) {
    console.error('Error fetching faculty groups:', error);
    return [];
  }
}

// Helper functions
function getRandomColor(seed: number): string {
  const colors = [
    'bg-purple-600',
    'bg-orange-600',
    'bg-green-600',
    'bg-blue-600',
    'bg-pink-600',
    'bg-indigo-600'
  ];
  return colors[seed % colors.length];
}
