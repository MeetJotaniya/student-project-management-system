# Projinity (SPMS)

A comprehensive web application for managing student academic projects with role-based access for Admin, Faculty, and Students.

## Features

- 🔐 **Role-based Authentication** - Login system for Admin, Faculty, and Students
- 📊 **Dashboard Views** - Separate dashboards for each user role
- 🎨 **Modern UI** - Dark-themed interface matching the design system
- 🗄️ **Database Integration** - PostgreSQL with Prisma ORM
- 🔒 **Secure Authentication** - Password hashing with bcrypt

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database running
- npm or yarn package manager

### Quick Setup (5 minutes)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create `.env` file** in the root directory:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/projinity?schema=public"
   ```
   > ⚠️ **Important**: Replace `username`, `password`, and `projinity` with your actual PostgreSQL credentials and database name.

3. **Generate Prisma Client**:
   ```bash
   npm run db:generate
   ```

4. **Push database schema**:
   ```bash
   npm run db:push
   ```

5. **Seed test users**:
   ```bash
   npm run db:seed
   ```

6. **Start development server**:
   ```bash
   npm run dev
   ```

7. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Test Credentials

After running `npm run db:seed`, you can login with:
- **Admin**: `admin@university.edu` / `password123`
- **Faculty**: `faculty@university.edu` / `password123`
- **Student**: `student@university.edu` / `password123`

### Troubleshooting Login Errors

If you see **"Server error. Please check your connection and try again."**:

1. ✅ Check if `.env` file exists with `DATABASE_URL`
2. ✅ Verify PostgreSQL is running
3. ✅ Test connection: `npx tsx scripts/test-db-connection.ts`
4. ✅ Make sure you ran `npm run db:push` and `npm run db:seed`

See `SETUP.md` for detailed troubleshooting steps.

## Project Structure

```
student-project-management-system/
├── app/
│   ├── admin/
│   │   └── dashboard/        # Admin dashboard
│   ├── faculty/
│   │   └── dashboard/        # Faculty dashboard
│   ├── student/
│   │   └── dashboard/        # Student dashboard
│   ├── api/
│   │   └── auth/
│   │       └── login/        # Login API endpoint
│   ├── login/                # Login page
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page (redirects to login)
├── lib/
│   ├── auth.ts               # Authentication utilities
│   └── prisma.ts             # Prisma client instance
├── prisma/
│   └── schema.prisma         # Database schema
└── scripts/
    └── seed-users.ts          # Database seeding script
```

## Database Schema

The system uses the following main models:
- **student** - Student accounts with email and password
- **staff** - Faculty and Admin accounts with role field
- **projectgroup** - Project groups
- **projectgroupmember** - Group memberships
- **projectmeeting** - Meeting records
- **projectmeetingattendance** - Attendance tracking

## Authentication Flow

1. User selects their role (Student, Faculty, or Admin) on the login page
2. User enters email and password
3. System validates credentials against the database
4. On success, user is redirected to their role-specific dashboard:
   - Admin → `/admin/dashboard`
   - Faculty → `/faculty/dashboard`
   - Student → `/student/dashboard`

## User Roles

### Admin
- Full system access
- Manage projects, students, and faculty
- System configuration
- Generate reports

### Faculty
- View assigned project groups
- Approve project proposals
- Schedule and conduct meetings
- Record attendance and progress

### Student
- Create/join project groups
- Submit proposals and documents
- View meeting history
- Track project progress

## Design System

The application follows a comprehensive design system with:
- **Primary Color**: Blue (#2563eb)
- **Typography**: Inter font family
- **Dark Mode**: Slate color palette
- **Components**: Consistent spacing, shadows, and borders

## Development

### Adding New Features

1. Update Prisma schema if database changes are needed
2. Run `npm run db:generate` and `npm run db:push`
3. Create API routes in `app/api/`
4. Create pages in `app/`
5. Use the design system components and styles

### Database Migrations

```bash
# Generate Prisma Client after schema changes
npm run db:generate

# Push schema changes to database
npm run db:push
```

## Security Notes

- Passwords are hashed using bcrypt
- Session management uses cookies (consider JWT for production)
- Role-based access control implemented
- Input validation on API routes

## Next Steps

- [ ] Implement JWT-based authentication
- [ ] Add session management with httpOnly cookies
- [ ] Complete dashboard features for each role
- [ ] Add project management functionality
- [ ] Implement meeting scheduling
- [ ] Add file upload capabilities
- [ ] Create reporting features

## License

This project is part of a university academic system.

## Support

For issues or questions, contact the development team.
