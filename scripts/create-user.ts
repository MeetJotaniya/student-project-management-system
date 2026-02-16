import { PrismaClient } from '../app/generated/prisma';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcryptjs';

// Create Prisma client with adapter
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error('❌ DATABASE_URL environment variable is not set');
  process.exit(1);
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function createUser() {
  try {
    const email = process.argv[2] || '23010101116@darshan.ac.in';
    const password = process.argv[3] || 'password123';
    const role = process.argv[4] || 'student';
    const name = process.argv[5] || 'Student User';

    console.log(`Creating ${role} user: ${email}`);

    const hashedPassword = await bcrypt.hash(password, 10);

    if (role === 'student') {
      const user = await prisma.student.upsert({
        where: { email },
        update: {
          password: hashedPassword,
          studentname: name,
        },
        create: {
          studentname: name,
          email,
          password: hashedPassword,
        },
      });
      console.log('✅ Student created:', user.email);
      console.log(`   Password: ${password}`);
    } else if (role === 'faculty' || role === 'admin') {
      const user = await prisma.staff.upsert({
        where: { email },
        update: {
          password: hashedPassword,
          staffname: name,
          role: role as 'admin' | 'faculty',
        },
        create: {
          staffname: name,
          email,
          password: hashedPassword,
          role: role as 'admin' | 'faculty',
        },
      });
      console.log(`✅ ${role} created:`, user.email);
      console.log(`   Password: ${password}`);
    }

    console.log('\nYou can now login with:');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Role: ${role}`);
  } catch (error) {
    console.error('❌ Error creating user:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();

