# Admin Dashboard Navigation - Faculty & Student Registration

## Overview
Added navigation buttons and registration pages for admins to easily add faculty members and students to the SPMS system.

## New Features

### 1. Admin Dashboard Navigation
- **Quick Action Cards**: Two prominent cards on the dashboard for "Add New Student" and "Add New Faculty"
- **Sidebar Navigation**: Updated sidebar links to navigate to `/admin/students` and `/admin/faculty`

### 2. Student Registration Page (`/admin/students`)
**Features:**
- Individual student entry form with profile image upload
- Bulk upload functionality (CSV template download)
- Real-time student preview card
- Auto-generated student ID (GEN-YYYY-XXXX format)
- Auto-generated secure passwords
- Form validation and error handling

**Fields:**
- Full Name (required)
- Email Address (required)
- Phone Number
- Department (dropdown)
- Profile Image (optional)
- Password (auto-generated or manual)

### 3. Faculty Registration Page (`/admin/faculty`)
**Features:**
- Staff information form with profile image upload
- Recently added faculty sidebar
- Role selection (Faculty, Admin, Coordinator)
- Professional profile description
- Session timer and help documentation

**Fields:**
- Staff Name (required)
- Email Address (required)
- Phone Number
- Account Role (required)
- Profile Image (optional)
- Temporary Password (auto-generated)
- Expertise & Description

## API Endpoints

### Student Registration
- **Endpoint**: `POST /api/admin/register-student`
- **Database**: Uses `student` table
- **Fields**: studentname, email, password (hashed), phone, description (department), registeredby

### Faculty Registration
- **Endpoint**: `POST /api/admin/register-faculty`
- **Database**: Uses `staff` table
- **Fields**: staffname, email, password (hashed), phone, role, description, registeredby

## Database Schema Alignment
- Uses existing Prisma schema with separate `student` and `staff` tables
- Passwords are hashed using bcryptjs
- Tracks who registered each user via `registeredby` field
- Maintains referential integrity with existing project management system

## Security Features
- Password hashing with bcryptjs
- Email uniqueness validation
- Role-based access control
- Input validation and sanitization
- CSRF protection through Next.js

## UI/UX Improvements
- Consistent dark theme matching existing design
- Responsive layout for mobile and desktop
- Real-time form validation
- Loading states and error handling
- Profile image upload with preview
- Breadcrumb navigation
- Session management indicators

## Installation Requirements
```bash
npm install bcryptjs js-cookie @types/bcryptjs @types/js-cookie
```

## Usage
1. Admin logs into the dashboard
2. Clicks "Add Student" or "Add Faculty" quick action cards
3. Fills out the registration form
4. Uploads profile image (optional)
5. Submits form to create new user account
6. New user receives credentials via email (future enhancement)

## Future Enhancements
- Email notification system for new user credentials
- Bulk CSV upload processing
- Profile image storage (S3 or local filesystem)
- Advanced user management (edit, deactivate, bulk operations)
- Audit logging for user creation activities