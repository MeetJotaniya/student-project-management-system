'use server';

import { prisma } from '../prisma';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';

// --- Student Actions ---

export async function addStudent(formData: any) {
  try {
    const { studentname, email, password, phone, registeredby } = formData;

    const existingStudent = await prisma.student.findUnique({
      where: { email },
    });

    if (existingStudent) {
      return { error: 'Student with this email already exists' };
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const student = await prisma.student.create({
      data: {
        studentname,
        email,
        password: hashedPassword,
        phone,
        registeredby: Number(registeredby),
      },
    });

    revalidatePath('/admin/students');
    return { success: true, student };
  } catch (error: any) {
    console.error('Error adding student:', error);
    return { error: error.message || 'Failed to add student' };
  }
}

export async function updateStudent(id: number, formData: any) {
  try {
    const { studentname, email, phone, password } = formData;

    const data: any = {
      studentname,
      email,
      phone,
    };

    if (password && password.trim() !== '') {
      data.password = await bcrypt.hash(password, 12);
    }

    const student = await prisma.student.update({
      where: { studentid: id },
      data,
    });

    revalidatePath('/admin/students');
    return { success: true, student };
  } catch (error: any) {
    console.error('Error updating student:', error);
    return { error: error.message || 'Failed to update student' };
  }
}

export async function deleteStudent(id: number) {
  try {
    await prisma.student.delete({
      where: { studentid: id },
    });

    revalidatePath('/admin/students');
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting student:', error);
    return { error: error.message || 'Failed to delete student' };
  }
}

// --- Faculty Actions ---

export async function addFaculty(formData: any) {
  try {
    const { staffname, email, password, phone, role, description, registeredby } = formData;

    const existingStaff = await prisma.staff.findUnique({
      where: { email },
    });

    if (existingStaff) {
      return { error: 'Staff with this email already exists' };
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const staff = await prisma.staff.create({
      data: {
        staffname,
        email,
        password: hashedPassword,
        phone,
        role,
        description,
        registeredby: Number(registeredby),
      },
    });

    revalidatePath('/admin/faculty');
    return { success: true, staff };
  } catch (error: any) {
    console.error('Error adding faculty:', error);
    return { error: error.message || 'Failed to add faculty' };
  }
}

export async function updateFaculty(id: number, formData: any) {
  try {
    const { staffname, email, phone, role, description, password } = formData;

    const data: any = {
      staffname,
      email,
      phone,
      role,
      description,
    };

    if (password && password.trim() !== '') {
      data.password = await bcrypt.hash(password, 12);
    }

    const staff = await prisma.staff.update({
      where: { staffid: id },
      data,
    });

    revalidatePath('/admin/faculty');
    return { success: true, staff };
  } catch (error: any) {
    console.error('Error updating faculty:', error);
    return { error: error.message || 'Failed to update faculty' };
  }
}

export async function deleteFaculty(id: number) {
  try {
    await prisma.staff.delete({
      where: { staffid: id },
    });

    revalidatePath('/admin/faculty');
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting faculty:', error);
    return { error: error.message || 'Failed to delete faculty' };
  }
}
