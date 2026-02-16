import { prisma } from './prisma';

// Get all available students (not in any group)
export async function getAvailableStudents() {
  try {
    if (!prisma) {
      console.error('Prisma client is not initialized');
      return [];
    }

    const students = await prisma.student.findMany({
      where: {
        projectgroupmember: {
          none: {}
        }
      },
      select: {
        studentid: true,
        studentname: true,
        email: true
      },
      orderBy: {
        studentname: 'asc'
      }
    });

    return students;
  } catch (error) {
    console.error('Error fetching available students:', error);
    return [];
  }
}

// Create a group request (not directly create group)
export async function createGroupRequest(data: {
  groupName: string;
  projectTitle: string;
  projectDescription: string;
  projectArea: string;
  technologies: string[];
  leaderId: number;
  members: Array<{ studentId: number; role: string }>;
}) {
  try {
    // Validate group size (2-4 members including leader)
    const totalMembers = data.members.length + 1; // +1 for leader
    if (totalMembers < 2 || totalMembers > 4) {
      throw new Error('Group must have 2-4 members');
    }

    // Check if any student is already in a group or has pending request
    const studentIds = [data.leaderId, ...data.members.map(m => m.studentId)];
    
    const existingMembers = await prisma.projectgroupmember.findMany({
      where: {
        studentid: {
          in: studentIds
        }
      }
    });

    if (existingMembers.length > 0) {
      throw new Error('One or more students are already in a group');
    }

    // Check for pending requests
    const pendingRequests = await prisma.grouprequest.findMany({
      where: {
        leaderid: {
          in: studentIds
        },
        status: 'pending'
      }
    });

    if (pendingRequests.length > 0) {
      throw new Error('One or more students already have a pending group request');
    }

    // Create group request
    const groupRequest = await prisma.grouprequest.create({
      data: {
        groupname: data.groupName,
        projecttitle: data.projectTitle,
        projectdescription: data.projectDescription,
        projectarea: data.projectArea,
        technologies: data.technologies.join(', '),
        leaderid: data.leaderId,
        memberdata: JSON.stringify(data.members),
        status: 'pending'
      }
    });

    // Log activity
    await prisma.activitylog.create({
      data: {
        type: 'group_request_created',
        detail: `Group request "${data.groupName}" submitted by student ID ${data.leaderId}`,
        userid: data.leaderId,
        userrole: 'student'
      }
    });

    return groupRequest;
  } catch (error) {
    console.error('Error creating group request:', error);
    throw error;
  }
}

// Get pending group requests (for admin)
export async function getPendingGroupRequests() {
  try {
    const requests = await prisma.grouprequest.findMany({
      where: {
        status: 'pending'
      },
      include: {
        leader: true
      },
      orderBy: {
        created: 'desc'
      }
    });

    return requests.map(request => ({
      requestId: request.requestid,
      groupName: request.groupname,
      projectTitle: request.projecttitle,
      projectDescription: request.projectdescription,
      projectArea: request.projectarea,
      technologies: request.technologies?.split(', ') || [],
      leaderName: request.leader.studentname,
      leaderEmail: request.leader.email,
      leaderId: request.leaderid,
      members: JSON.parse(request.memberdata),
      memberCount: JSON.parse(request.memberdata).length + 1,
      created: request.created,
      status: request.status
    }));
  } catch (error) {
    console.error('Error fetching pending requests:', error);
    return [];
  }
}

// Approve group request and create the actual group
export async function approveGroupRequest(requestId: number, adminId: number) {
  try {
    const request = await prisma.grouprequest.findUnique({
      where: { requestid: requestId }
    });

    if (!request || request.status !== 'pending') {
      throw new Error('Invalid or already processed request');
    }

    const members = JSON.parse(request.memberdata);

    // Create the project group
    const projectGroup = await prisma.projectgroup.create({
      data: {
        projectgroupname: request.groupname,
        projecttitle: request.projecttitle,
        projectdescription: request.projectdescription,
        projectarea: request.projectarea,
        description: `Technologies: ${request.technologies}`,
        status: 'approved',
        projectgroupmember: {
          create: [
            // Add leader
            {
              studentid: request.leaderid,
              isgroupleader: true,
              description: 'Team Leader'
            },
            // Add other members
            ...members.map((member: any) => ({
              studentid: member.studentId,
              isgroupleader: false,
              description: member.role
            }))
          ]
        }
      }
    });

    // Update request status
    await prisma.grouprequest.update({
      where: { requestid: requestId },
      data: {
        status: 'approved',
        approvedby: adminId
      }
    });

    // Log activity
    await prisma.activitylog.create({
      data: {
        type: 'group_approved',
        detail: `Group "${request.groupname}" approved by admin ID ${adminId}`,
        userid: adminId,
        userrole: 'admin'
      }
    });

    return projectGroup;
  } catch (error) {
    console.error('Error approving group request:', error);
    throw error;
  }
}

// Reject group request
export async function rejectGroupRequest(requestId: number, adminId: number, reason: string) {
  try {
    const request = await prisma.grouprequest.findUnique({
      where: { requestid: requestId }
    });

    if (!request || request.status !== 'pending') {
      throw new Error('Invalid or already processed request');
    }

    // Update request status
    await prisma.grouprequest.update({
      where: { requestid: requestId },
      data: {
        status: 'rejected',
        rejectionreason: reason,
        approvedby: adminId
      }
    });

    // Log activity
    await prisma.activitylog.create({
      data: {
        type: 'group_rejected',
        detail: `Group request "${request.groupname}" rejected by admin ID ${adminId}`,
        userid: adminId,
        userrole: 'admin'
      }
    });

    return true;
  } catch (error) {
    console.error('Error rejecting group request:', error);
    throw error;
  }
}

// Get student's group request status (for any team member)
export async function getStudentGroupRequest(studentId: number) {
  try {
    // Check if student is a leader with a request
    const leaderRequest = await prisma.grouprequest.findFirst({
      where: {
        leaderid: studentId,
        status: {
          in: ['pending', 'rejected']
        }
      },
      orderBy: {
        created: 'desc'
      }
    });

    if (leaderRequest) {
      return {
        requestId: leaderRequest.requestid,
        groupName: leaderRequest.groupname,
        projectTitle: leaderRequest.projecttitle,
        status: leaderRequest.status,
        rejectionReason: leaderRequest.rejectionreason,
        created: leaderRequest.created,
        isLeader: true
      };
    }

    // Check if student is a member in any pending request
    const allPendingRequests = await prisma.grouprequest.findMany({
      where: {
        status: {
          in: ['pending', 'rejected']
        }
      },
      orderBy: {
        created: 'desc'
      }
    });

    for (const request of allPendingRequests) {
      const members = JSON.parse(request.memberdata);
      const isMember = members.some((m: any) => m.studentId === studentId);
      
      if (isMember) {
        return {
          requestId: request.requestid,
          groupName: request.groupname,
          projectTitle: request.projecttitle,
          status: request.status,
          rejectionReason: request.rejectionreason,
          created: request.created,
          isLeader: false
        };
      }
    }

    return null;
  } catch (error) {
    console.error('Error fetching student request:', error);
    return null;
  }
}

// Update member role
export async function updateMemberRole(memberId: number, role: string, leaderId: number) {
  try {
    // Verify the requester is the group leader
    const member = await prisma.projectgroupmember.findUnique({
      where: {
        projectgroupmemberid: memberId
      },
      include: {
        projectgroup: {
          include: {
            projectgroupmember: {
              where: {
                studentid: leaderId,
                isgroupleader: true
              }
            }
          }
        }
      }
    });

    if (!member || member.projectgroup?.projectgroupmember.length === 0) {
      throw new Error('Unauthorized: Only group leader can update roles');
    }

    const updatedMember = await prisma.projectgroupmember.update({
      where: {
        projectgroupmemberid: memberId
      },
      data: {
        description: role
      }
    });

    return updatedMember;
  } catch (error) {
    console.error('Error updating member role:', error);
    throw error;
  }
}

// Get student's group info (works for any team member)
export async function getStudentGroup(studentId: number) {
  try {
    const groupMember = await prisma.projectgroupmember.findFirst({
      where: {
        studentid: studentId
      },
      include: {
        projectgroup: {
          where: {
            status: 'approved' // Only show approved groups
          },
          include: {
            projectgroupmember: {
              include: {
                student: true
              }
            },
            staff_projectgroup_convenerstaffidTostaff: true,
            staff_projectgroup_expertstaffidTostaff: true
          }
        }
      }
    });

    if (!groupMember || !groupMember.projectgroup) {
      return null;
    }

    const group = groupMember.projectgroup;
    const technologies = group?.description?.replace('Technologies: ', '').split(', ') || [];

    return {
      groupId: group?.projectgroupid,
      groupName: group?.projectgroupname,
      projectTitle: group?.projecttitle,
      projectDescription: group?.projectdescription,
      projectArea: group?.projectarea,
      technologies,
      isLeader: groupMember.isgroupleader,
      members: group?.projectgroupmember.map(m => ({
        id: m.projectgroupmemberid,
        studentId: m.studentid,
        name: m.student?.studentname,
        email: m.student?.email,
        role: m.description,
        isLeader: m.isgroupleader
      })),
      convener: group?.staff_projectgroup_convenerstaffidTostaff?.staffname,
      expert: group?.staff_projectgroup_expertstaffidTostaff?.staffname,
      hasConvener: !!group?.convenerstaffid,
      hasExpert: !!group?.expertstaffid
    };
  } catch (error) {
    console.error('Error fetching student group:', error);
    return null;
  }
}

// Get all groups (for admin) - only approved groups
export async function getAllGroups() {
  try {
    const groups = await prisma.projectgroup.findMany({
      where: {
        status: 'approved'
      },
      include: {
        projectgroupmember: {
          include: {
            student: true
          }
        },
        staff_projectgroup_convenerstaffidTostaff: true,
        staff_projectgroup_expertstaffidTostaff: true
      },
      orderBy: {
        created: 'desc'
      }
    });

    return groups.map(group => {
      const technologies = group.description?.replace('Technologies: ', '').split(', ') || [];
      const leader = group.projectgroupmember.find(m => m.isgroupleader);

      return {
        groupId: group.projectgroupid,
        groupName: group.projectgroupname,
        projectTitle: group.projecttitle,
        projectDescription: group.projectdescription,
        projectArea: group.projectarea,
        technologies,
        memberCount: group.projectgroupmember.length,
        leaderName: leader?.student?.studentname,
        convener: group.staff_projectgroup_convenerstaffidTostaff?.staffname,
        expert: group.staff_projectgroup_expertstaffidTostaff?.staffname,
        hasConvener: !!group.convenerstaffid,
        hasExpert: !!group.expertstaffid,
        created: group.created
      };
    });
  } catch (error) {
    console.error('Error fetching all groups:', error);
    return [];
  }
}

// Assign faculty to group (admin only)
export async function assignFacultyToGroup(
  groupId: number,
  convenerId?: number,
  expertId?: number
) {
  try {
    const updatedGroup = await prisma.projectgroup.update({
      where: {
        projectgroupid: groupId
      },
      data: {
        convenerstaffid: convenerId,
        expertstaffid: expertId
      },
      include: {
        staff_projectgroup_convenerstaffidTostaff: true,
        staff_projectgroup_expertstaffidTostaff: true
      }
    });

    // Log activity
    await prisma.activitylog.create({
      data: {
        type: 'faculty_assigned',
        detail: `Faculty assigned to group ID ${groupId}`,
        userrole: 'admin'
      }
    });

    return updatedGroup;
  } catch (error) {
    console.error('Error assigning faculty to group:', error);
    throw error;
  }
}
