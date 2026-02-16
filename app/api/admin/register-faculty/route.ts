import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { logActivity } from '../../../../lib/admin';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      staffname,
      email,
      password,
      phonenumber,
      role,
      description,
      registeredby
    } = body;

    // Validate required fields
    if (!staffname || !email || !password || !role) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate role
    const validRoles = ['admin', 'faculty', 'coordinator'];
    if (!validRoles.includes(role)) {
      return NextResponse.json(
        { error: 'Invalid role specified' },
        { status: 400 }
      );
    }

    // Check if staff already exists
    const existingStaff = await prisma.staff.findUnique({
      where: { email }
    });

    if (existingStaff) {
      return NextResponse.json(
        { error: 'Staff member with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create staff member
    const staff = await prisma.staff.create({
      data: {
        staffname,
        email,
        password: hashedPassword,
        phone: phonenumber,
        role,
        description,
        registeredby
      }
    });

    // Log activity
    await logActivity(
      'Faculty Registration',
      `${staffname} (${email}) as ${role} successfully added`,
      registeredby,
      'admin'
    );

    // Remove password from response
    const { password: _, ...staffResponse } = staff;

    return NextResponse.json({
      message: 'Faculty member registered successfully',
      staff: staffResponse
    }, { status: 201 });

  } catch (error) {
    console.error('Error registering faculty:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}