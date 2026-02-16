# Quick Setup Guide

## Step 1: Create .env file

Create a `.env` file in the root directory with your database connection:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name?schema=public"
```

**Example:**
```env
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/spms?schema=public"
```

## Step 2: Generate Prisma Client

```bash
npm run db:generate
```

## Step 3: Push Database Schema

```bash
npm run db:push
```

## Step 4: Seed Test Users

```bash
npm run db:seed
```

This will create:
- **Admin**: `admin@university.edu` / `password123`
- **Faculty**: `faculty@university.edu` / `password123`
- **Student**: `student@university.edu` / `password123`

## Step 5: Start Development Server

```bash
npm run dev
```

## Troubleshooting

### "Server error. Please check your connection and try again."

This means your database is not connected. Check:

1. ✅ Is PostgreSQL running?
2. ✅ Is DATABASE_URL correct in `.env`?
3. ✅ Have you run `npm run db:push`?
4. ✅ Have you run `npm run db:seed`?

### Test Database Connection

```bash
npx tsx scripts/test-db-connection.ts
```

This will tell you exactly what's wrong with your database connection.

