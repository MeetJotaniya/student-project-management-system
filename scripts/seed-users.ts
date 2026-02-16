import { PrismaClient } from '../app/generated/prisma';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcryptjs';

// Create Prisma client with adapter (same as lib/prisma.ts)
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error('❌ DATABASE_URL environment variable is not set');
  process.exit(1);
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding users...');

  // Hash passwords
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Create Admin
  const admin = await prisma.staff.upsert({
    where: { email: 'admin@university.edu' },
    update: {},
    create: {
      staffname: 'Dr. Alex Morgan',
      email: 'admin@university.edu',
      password: hashedPassword,
      role: 'admin',
      phone: '+1234567890',
    },
  });
  console.log('Created admin:', admin.email);

  // Create Faculty
  const faculty = await prisma.staff.upsert({
    where: { email: 'faculty@university.edu' },
    update: {},
    create: {
      staffname: 'Prof. John Smith',
      email: 'faculty@university.edu',
      password: hashedPassword,
      role: 'faculty',
      phone: '+1234567891',
    },
  });
  console.log('Created faculty:', faculty.email);

  // Create Student
  const student = await prisma.student.upsert({
    where: { email: 'student@university.edu' },
    update: {},
    create: {
      studentname: 'John Doe',
      email: 'student@university.edu',
      password: hashedPassword,
      phone: '+1234567892',
    },
  });
  console.log('Created student:', student.email);

  console.log('Seeding completed!');
  console.log('\nTest credentials:');
  console.log('Admin: admin@university.edu / password123');
  console.log('Faculty: faculty@university.edu / password123');
  console.log('Student: student@university.edu / password123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

