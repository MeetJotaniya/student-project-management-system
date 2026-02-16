import { prisma } from './prisma';

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
    const completedMeetings = project.projectmeeting.filter(
      m => m.meetingstatus === 'completed'
    ).length;
    const totalMeetings = project.projectmeeting.length || 5; // Default to 5 phases
    const progress = totalMeetings > 0 ? Math.round((completedMeetings / totalMeetings) * 100) : 0;

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
      resources: [
        { id: '1', name: 'Project Repository', type: 'folder' },
        { id: '2', name: 'Project Proposal.pdf', type: 'file' },
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

    const meetings = projectMember.projectgroup.projectmeeting;
    
    // Define standard phases
    const standardPhases = [
      { label: 'Proposal', purpose: 'proposal' },
      { label: 'Review', purpose: 'review' },
      { label: 'Development', purpose: 'development' },
      { label: 'Testing', purpose: 'testing' },
      { label: 'Final Submission', purpose: 'final' }
    ];

    let currentPhaseIndex = 0;
    const completedCount = meetings.filter(m => m.meetingstatus === 'completed').length;
    currentPhaseIndex = Math.min(completedCount, standardPhases.length - 1);

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
    // Get recent activity logs related to the student
    const activities = await prisma.activitylog.findMany({
      where: {
        OR: [
          { userid: studentId },
          { userrole: 'student' }
        ]
      },
      orderBy: {
        created: 'desc'
      },
      take: 10
    });

    return activities.map(activity => ({
      id: activity.activityid.toString(),
      type: activity.type === 'comment' ? 'comment' as const :
            activity.type === 'submission' ? 'submission' as const :
            'task' as const,
      title: activity.type.charAt(0).toUpperCase() + activity.type.slice(1),
      message: activity.detail,
      timestamp: formatTimeAgo(activity.created),
      avatarInitials: activity.userrole ? activity.userrole.substring(0, 2).toUpperCase() : 'SY'
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
