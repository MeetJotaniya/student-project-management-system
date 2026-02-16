import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { logActivity } from '../../../../lib/admin';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      studentname,
      email,
      password,
      phonenumber,
      registeredby
    } = body;

    // Validate required fields
    if (!studentname || !email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if student already exists
    const existingStudent = await prisma.student.findUnique({
      where: { email }
    });

    if (existingStudent) {
      return NextResponse.json(
        { error: 'Student with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create student
    const student = await prisma.student.create({
      data: {
        studentname,
        email,
        password: hashedPassword,
        phone: phonenumber,
        registeredby
      }
    });

    // Log activity
    await logActivity(
      'Student Registration',
      `${studentname} (${email}) successfully added`,
      registeredby,
      'admin'
    );

    // Remove password from response
    const { password: _, ...studentResponse } = student;

    return NextResponse.json({
      message: 'Student registered successfully',
      student: studentResponse
    }, { status: 201 });

  } catch (error) {
    console.error('Error registering student:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}