import { prisma } from './prisma';

export async function getAdminStats() {
  try {
    const [totalProjects, totalStudents, totalFaculty, pendingProposals] = await Promise.all([
      // Count only approved project groups
      prisma.projectgroup.count({
        where: {
          status: 'approved'
        }
      }),
      prisma.student.count(),
      prisma.staff.count({
        where: {
          role: 'faculty'
        }
      }),
      // Count pending group requests (not approved groups)
      prisma.grouprequest.count({
        where: {
          status: 'pending'
        }
      })
    ]);

    return {
      totalProjects,
      totalStudents,
      totalFaculty,
      pendingProposals
    };
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return {
      totalProjects: 0,
      totalStudents: 0,
      totalFaculty: 0,
      pendingProposals: 0
    };
  }
}

export async function getRecentActivity(limit = 5) {
  try {
    const logs = await prisma.activitylog.findMany({
      take: limit,
      orderBy: {
        created: 'desc'
      }
    });

    return logs.map(log => ({
      user: log.type,
      detail: log.detail,
      time: formatTimeAgo(log.created),
      rawTime: log.created
    }));
  } catch (error) {
    console.error('Error fetching recent activity:', error);
    return [];
  }
}

export async function logActivity(type: string, detail: string, userId?: number, userRole?: string) {
  try {
    await prisma.activitylog.create({
      data: {
        type,
        detail,
        userid: userId,
        userrole: userRole
      }
    });
  } catch (error) {
    console.error('Error logging activity:', error);
  }
}

function formatTimeAgo(date: Date) {
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
