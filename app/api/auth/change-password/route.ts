import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get('user');

    if (!userCookie) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = JSON.parse(userCookie.value);
    const { currentPassword, newPassword } = await request.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'Current password and new password are required' },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { error: 'New password must be at least 6 characters' },
        { status: 400 }
      );
    }

    if (user.role === 'student') {
      const student = await prisma.student.findUnique({
        where: { studentid: user.id }
      });

      if (!student) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      let isValidPassword = false;
      if (student.password === currentPassword) {
        isValidPassword = true;
      } else {
        try {
          isValidPassword = await bcrypt.compare(currentPassword, student.password);
        } catch {
          isValidPassword = false;
        }
      }

      if (!isValidPassword) {
        return NextResponse.json(
          { error: 'Current password is incorrect' },
          { status: 400 }
        );
      }

      const hashedPassword = await bcrypt.hash(newPassword, 12);
      await prisma.student.update({
        where: { studentid: user.id },
        data: { password: hashedPassword }
      });
    } else {
      const staff = await prisma.staff.findUnique({
        where: { staffid: user.id }
      });

      if (!staff) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      let isValidPassword = false;
      if (staff.password === currentPassword) {
        isValidPassword = true;
      } else {
        try {
          isValidPassword = await bcrypt.compare(currentPassword, staff.password);
        } catch {
          isValidPassword = false;
        }
      }

      if (!isValidPassword) {
        return NextResponse.json(
          { error: 'Current password is incorrect' },
          { status: 400 }
        );
      }

      const hashedPassword = await bcrypt.hash(newPassword, 12);
      await prisma.staff.update({
        where: { staffid: user.id },
        data: { password: hashedPassword }
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Change password error:', error);
    return NextResponse.json(
      { error: 'Failed to change password' },
      { status: 500 }
    );
  }
}
