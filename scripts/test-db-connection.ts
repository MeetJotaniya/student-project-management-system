import { PrismaClient } from '../app/generated/prisma';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// Create Prisma client with adapter
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error('❌ DATABASE_URL environment variable is not set');
  process.exit(1);
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function testConnection() {
  try {
    console.log('Testing database connection...');
    
    // Test connection
    await prisma.$connect();
    console.log('✅ Database connection successful!');
    
    // Test query - count students
    const studentCount = await prisma.student.count();
    console.log(`✅ Found ${studentCount} students in database`);
    
    // Test query - count staff
    const staffCount = await prisma.staff.count();
    console.log(`✅ Found ${staffCount} staff members in database`);
    
    // Check for test users
    const admin = await prisma.staff.findUnique({
      where: { email: 'admin@university.edu' },
    });
    
    const student = await prisma.student.findUnique({
      where: { email: 'student@university.edu' },
    });
    
    if (admin) {
      console.log('✅ Admin user exists');
    } else {
      console.log('⚠️  Admin user not found. Run: npm run db:seed');
    }
    
    if (student) {
      console.log('✅ Student user exists');
    } else {
      console.log('⚠️  Student user not found. Run: npm run db:seed');
    }
    
  } catch (error) {
    console.error('❌ Database connection failed:');
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      
      if (error.message.includes('Can\'t reach database server')) {
        console.error('\n💡 Solution: Check your DATABASE_URL in .env file');
        console.error('   Make sure PostgreSQL is running and accessible');
      } else if (error.message.includes('P1001')) {
        console.error('\n💡 Solution: Database server is not reachable');
        console.error('   Check your database connection settings');
      } else if (error.message.includes('schema')) {
        console.error('\n💡 Solution: Run: npm run db:push');
      }
    }
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();

