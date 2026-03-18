import { prisma } from './prisma';
import { getProjectProgress } from './progress';

export async function getStudentProject(studentId: number) {
  try {
    // Find the student's project group
    const projectMember = await prisma.projectgroupmember.findFirst({
      where: {
        studentid: studentId
      },
      include: {
        projectgroup: {
          where: {
            status: 'approved' // Only show approved groups
          },
          include: {
            projecttype: true,
            staff_projectgroup_convenerstaffidTostaff: true,
            staff_projectgroup_expertstaffidTostaff: true,
            projectgroupmember: {
              include: {
                student: true
              }
            },
            projectmeeting: {
              orderBy: {
                meetingdatetime: 'desc'
              }
            }
          }
        }
      }
    });

    if (!projectMember || !projectMember.projectgroup) {
      return null;
    }

    const project = projectMember.projectgroup;
    const progress = getProjectProgress(project);

    return {
      id: project.projectgroupid,
      title: project.projecttitle || 'Untitled Project',
      projectId: `#${project.projecttype?.projecttypename || 'PRJ'}-${project.projectgroupid}`,
      abstract: project.projectdescription || 'No description available',
      status: progress > 80 ? 'completed' : progress > 0 ? 'in-progress' : 'pending',
      progress,
      team: project.projectgroupname || 'Team',
      members: project.projectgroupmember.length,
      lastUpdated: project.modified ? formatTimeAgo(project.modified) : 'Never',
      area: project.projectarea,
      convener: project.staff_projectgroup_convenerstaffidTostaff?.staffname,
      expert: project.staff_projectgroup_expertstaffidTostaff?.staffname,
      isLeader: projectMember.isgroupleader || false,
      githubUrl: undefined,
      resources: [
        { id: '1', name: 'Project Repository', type: 'folder', url: '/student/resources' }
      ]
    };
  } catch (error) {
    console.error('Error fetching student project:', error);
    return null;
  }
}

export async function getStudentPhases(studentId: number) {
  try {
    const projectMember = await prisma.projectgroupmember.findFirst({
      where: {
        studentid: studentId
      },
      include: {
        projectgroup: {
          where: {
            status: 'approved'
          },
          include: {
            projectmeeting: {
              orderBy: {
                meetingdatetime: 'asc'
              }
            }
          }
        }
      }
    });

    if (!projectMember || !projectMember.projectgroup) {
      return [];
    }

    const project = projectMember.projectgroup;

    // Define standard phases (5 phases, 20% each)
    const standardPhases = [
      { label: 'Proposal', purpose: 'proposal' },
      { label: 'Review', purpose: 'review' },
      { label: 'Development', purpose: 'development' },
      { label: 'Testing', purpose: 'testing' },
      { label: 'Final Submission', purpose: 'final' }
    ];

    const progress = getProjectProgress(project);
    const currentPhaseIndex = Math.min(Math.floor(progress / 20), standardPhases.length - 1);

    return standardPhases.map((phase, index) => ({
      id: (index + 1).toString(),
      label: phase.label,
      status: index < currentPhaseIndex ? 'completed' as const :
        index === currentPhaseIndex ? 'current' as const :
          'upcoming' as const,
      stepNumber: index + 1
    }));
  } catch (error) {
    console.error('Error fetching student phases:', error);
    return [];
  }
}

export async function getStudentDeadlines(studentId: number) {
  try {
    const projectMember = await prisma.projectgroupmember.findFirst({
      where: {
        studentid: studentId
      },
      include: {
        projectgroup: {
          where: {
            status: 'approved'
          },
          include: {
            projectmeeting: {
              where: {
                meetingstatus: {
                  in: ['pending', 'scheduled']
                },
                meetingdatetime: {
                  gte: new Date()
                }
              },
              orderBy: {
                meetingdatetime: 'asc'
              },
              take: 5
            }
          }
        }
      }
    });

    if (!projectMember || !projectMember.projectgroup) {
      return [];
    }

    return projectMember.projectgroup.projectmeeting.map(meeting => {
      const dueDate = meeting.meetingdatetime ? new Date(meeting.meetingdatetime) : null;
      const now = new Date();
      const hoursUntil = dueDate ? Math.floor((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60)) : null;

      let dueDateStr = 'TBD';
      let priority: 'high' | 'medium' | 'low' = 'low';

      if (hoursUntil !== null) {
        if (hoursUntil < 24) {
          dueDateStr = `< ${hoursUntil}H`;
          priority = 'high';
        } else if (hoursUntil < 48) {
          dueDateStr = 'TMRW';
          priority = 'medium';
        } else {
          dueDateStr = dueDate!.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          priority = 'low';
        }
      }

      return {
        id: meeting.projectmeetingid.toString(),
        title: meeting.meetingpurpose || 'Meeting',
        description: meeting.meetinglocation || 'Location TBD',
        dueDate: dueDateStr,
        priority,
        status: 'pending' as const
      };
    });
  } catch (error) {
    console.error('Error fetching student deadlines:', error);
    return [];
  }
}

export async function getStudentNotifications(studentId: number) {
  try {
    // Derive notifications from upcoming meetings for this student
    const projectMember = await prisma.projectgroupmember.findFirst({
      where: { studentid: studentId },
      include: {
        projectgroup: {
          where: { status: 'approved' },
          include: {
            projectmeeting: {
              where: { meetingstatus: { in: ['pending', 'scheduled'] } },
              orderBy: { meetingdatetime: 'desc' },
              take: 10,
              include: { staff: { select: { staffname: true } } }
            }
          }
        }
      }
    });

    if (!projectMember?.projectgroup) return [];

    return projectMember.projectgroup.projectmeeting.map((m, i) => ({
      id: m.projectmeetingid.toString(),
      type: 'comment' as const,
      title: m.meetingpurpose || 'Meeting Scheduled',
      message: `${m.meetinglocation || 'Location TBD'} — by ${m.staff?.staffname || 'Faculty'}`,
      timestamp: m.meetingdatetime ? formatTimeAgo(m.meetingdatetime) : 'TBD',
      avatarInitials: 'MT',
      read: false
    }));
  } catch (error) {
    console.error('Error fetching student notifications:', error);
    return [];
  }
}

export async function getStudentStats(studentId: number) {
  try {
    const projectMember = await prisma.projectgroupmember.findFirst({
      where: {
        studentid: studentId
      },
      include: {
        projectgroup: {
          where: {
            status: 'approved'
          },
          include: {
            projectmeeting: true,
            projectgroupmember: true
          }
        }
      }
    });

    if (!projectMember || !projectMember.projectgroup) {
      return {
        hasProject: false,
        teamSize: 0,
        completedMeetings: 0,
        upcomingMeetings: 0
      };
    }

    const project = projectMember.projectgroup;
    const completedMeetings = project.projectmeeting.filter(
      m => m.meetingstatus === 'completed'
    ).length;
    const upcomingMeetings = project.projectmeeting.filter(
      m => m.meetingstatus === 'pending' || m.meetingstatus === 'scheduled'
    ).length;

    return {
      hasProject: true,
      teamSize: project.projectgroupmember.length,
      completedMeetings,
      upcomingMeetings
    };
  } catch (error) {
    console.error('Error fetching student stats:', error);
    return {
      hasProject: false,
      teamSize: 0,
      completedMeetings: 0,
      upcomingMeetings: 0
    };
  }
}

export async function getStudentCalendarMeetings(studentId: number) {
  try {
    const projectMember = await prisma.projectgroupmember.findFirst({
      where: {
        studentid: studentId
      },
      include: {
        projectgroup: {
          where: {
            status: 'approved'
          },
          include: {
            projectmeeting: {
              include: {
                staff: true
              },
              orderBy: {
                meetingdatetime: 'asc'
              }
            }
          }
        }
      }
    });

    if (!projectMember || !projectMember.projectgroup) {
      return [];
    }

    const meetings = projectMember.projectgroup.projectmeeting;
    const groupName = projectMember.projectgroup.projectgroupname || 'My Group';

    return meetings.map(meeting => ({
      id: meeting.projectmeetingid.toString(),
      title: `${meeting.meetingpurpose || 'Meeting'} - ${groupName}`,
      date: meeting.meetingdatetime || new Date(),
      time: meeting.meetingdatetime
        ? new Date(meeting.meetingdatetime).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        })
        : 'TBD',
      location: meeting.meetinglocation || undefined,
      attendees: projectMember.projectgroup!.projectmeeting.length,
      type: meeting.meetingstatus === 'completed' ? 'review' as const
        : meeting.meetingstatus === 'cancelled' ? 'deadline' as const
          : 'meeting' as const,
      notes: meeting.meetingnotes || undefined,
      purpose: meeting.meetingpurpose || undefined,
      status: meeting.meetingstatus || 'scheduled',
      faculty: meeting.staff?.staffname || 'Faculty',
      groupName
    }));
  } catch (error) {
    console.error('Error fetching student calendar meetings:', error);
    return [];
  }
}

// Helper function
function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'Just now';

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes} min${diffInMinutes > 1 ? 's' : ''} ago`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;

  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
}
