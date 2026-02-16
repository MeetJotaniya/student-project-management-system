import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '../../../../lib/prisma';

export async function POST(request: NextRequest) {
  try {
    // 1. Database Connection Check
    try {
      await prisma.$connect();
    } catch (dbError) {
      console.error('Database connection error:', dbError);
      return NextResponse.json(
        { error: 'Database connection failed. Ensure PostgreSQL is running.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { password, role } = body;
    // Normalize email to lowercase
    const email = body.email?.toLowerCase();

    if (!email || !password || !role) {
      return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });
    }

    let user: any = null;
    let userData = null;

    // 2. Fetch User based on Role
    if (role === 'student') {
      user = await prisma.student.findUnique({ where: { email } });
    } else {
      // Handles both 'faculty' and 'admin' from the 'staff' table
      user = await prisma.staff.findUnique({ where: { email } });
    }

    // 3. User Not Found
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 });
    }

    // 4. Password Validation (Plain-text fallback for dummy data)
    let isValidPassword = false;
    if (user.password === password) {
      isValidPassword = true;
    } else {
      try {
        isValidPassword = await bcrypt.compare(password, user.password);
      } catch (e) {
        isValidPassword = false;
      }
    }

    if (!isValidPassword) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // 5. Role & Permission Logic
    // If your staff table doesn't have a 'role' column, we check if they are trying 
    // to log in as admin. You might want to hardcode an admin email here for now.
    const actualRole = (user as any).role || (role === 'student' ? 'student' : 'faculty');

    if (role === 'admin' && actualRole !== 'admin' && email !== 'admin@university.edu') {
      return NextResponse.json({ error: 'Admin access denied' }, { status: 403 });
    }

    // 6. Map the Data for the Frontend
    userData = {
      id: role === 'student' ? user.studentid : user.staffid,
      name: role === 'student' ? user.studentname : user.staffname,
      email: user.email,
      role: actualRole,
    };

    return NextResponse.json({ success: true, user: userData });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}