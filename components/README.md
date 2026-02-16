# Component Library

This directory contains all reusable components for the SPMS application, organized following production-ready best practices.

## Structure

```
components/
├── ui/              # Base UI components (Button, Card, Input, etc.)
├── layout/          # Layout components (Sidebar, Header, TopNav)
├── dashboard/      # Dashboard-specific components
└── index.ts         # Barrel exports
```

## UI Components (`components/ui/`)

### Button
A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="md" leftIcon={<Icon />}>
  Click me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger' | 'success' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `isLoading`: boolean
- `leftIcon`: ReactNode
- `rightIcon`: ReactNode

### Card
Container component with variants and flexible padding.

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';

<Card variant="default" padding="md">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### Badge
Status indicators with color variants.

```tsx
import { Badge } from '@/components/ui';

<Badge variant="success">Active</Badge>
```

### ProgressBar
Progress indicator with customizable colors and sizes.

```tsx
import { ProgressBar } from '@/components/ui';

<ProgressBar value={75} color="blue" showLabel />
```

### Avatar & AvatarGroup
User avatars with status indicators and group display.

```tsx
import { Avatar, AvatarGroup } from '@/components/ui';

<Avatar name="John Doe" size="md" status="online" />
<AvatarGroup avatars={avatars} max={3} />
```

### Input
Form input with icons and error states.

```tsx
import { Input } from '@/components/ui';

<Input
  label="Email"
  leftIcon={<Mail />}
  error={error}
  placeholder="Enter email"
/>
```

### StatCard
Statistics display card for dashboards.

```tsx
import { StatCard } from '@/components/ui';

<StatCard
  label="Total Projects"
  value="12"
  subtitle="+2 this semester"
  icon={<FolderIcon />}
/>
```

## Layout Components (`components/layout/`)

### Sidebar
Navigation sidebar with user profile and menu items.

```tsx
import { Sidebar } from '@/components/layout';

<Sidebar
  logo={<Logo />}
  user={{ name: 'John Doe', department: 'CS' }}
  items={sidebarItems}
  onSignOut={handleSignOut}
/>
```

### Header
Page header with title, search, and actions.

```tsx
import { Header } from '@/components/layout';

<Header
  title="Dashboard"
  subtitle="Manage your projects"
  showSearch
  notificationCount={5}
/>
```

### TopNav
Top navigation bar for student dashboard.

```tsx
import { TopNav } from '@/components/layout';

<TopNav
  logo={<Logo />}
  navItems={navItems}
  actions={<ActionButtons />}
/>
```

## Dashboard Components (`components/dashboard/`)

### ProjectCard
Compact project card for project lists.

```tsx
import { ProjectCard } from '@/components/dashboard';

<ProjectCard
  project={project}
  onViewDetails={(id) => handleView(id)}
/>
```

### ProjectDetailCard
Detailed project card with full information.

```tsx
import { ProjectDetailCard } from '@/components/dashboard';

<ProjectDetailCard project={project} />
```

### PhaseProgress
Project phase progress indicator.

```tsx
import { PhaseProgress } from '@/components/dashboard';

<PhaseProgress
  currentPhase="Phase 2: Development"
  phases={phases}
  overallProgress={60}
/>
```

### DeadlineCard
Deadline list with priority indicators.

```tsx
import { DeadlineCard } from '@/components/dashboard';

<DeadlineCard deadlines={deadlines} />
```

### NotificationCard
Notification feed component.

```tsx
import { NotificationCard } from '@/components/dashboard';

<NotificationCard notifications={notifications} />
```

### ApprovalCard
Pending approvals with action buttons.

```tsx
import { ApprovalCard } from '@/components/dashboard';

<ApprovalCard
  approvals={approvals}
  onApprove={handleApprove}
  onReject={handleReject}
/>
```

### ScheduleCard
Schedule/timeline component.

```tsx
import { ScheduleCard } from '@/components/dashboard';

<ScheduleCard schedule={schedule} />
```

## TypeScript Types

All components use TypeScript interfaces defined in `types/index.ts`:

- `User` - User data structure
- `Project` - Project data structure
- `Deadline` - Deadline data structure
- `Notification` - Notification data structure
- `ScheduleItem` - Schedule item structure
- `ApprovalItem` - Approval item structure

## Usage Best Practices

1. **Import from barrel exports** for cleaner imports:
   ```tsx
   import { Button, Card } from '@/components/ui';
   ```

2. **Use TypeScript types** for type safety:
   ```tsx
   import type { Project } from '@/types';
   ```

3. **Compose components** to build complex UIs:
   ```tsx
   <Card>
     <CardHeader>
       <CardTitle>Title</CardTitle>
     </CardHeader>
     <CardContent>
       <Button>Action</Button>
     </CardContent>
   </Card>
   ```

4. **Follow the design system** - All components use consistent spacing, colors, and typography from Tailwind CSS.

5. **Make components reusable** - Pass data as props, not hardcoded values.

## Adding New Components

1. Create component file in appropriate directory (`ui/`, `layout/`, or `dashboard/`)
2. Export component and types from component file
3. Add to barrel export (`index.ts`) in the directory
4. Document props and usage in component file
5. Update this README if it's a commonly used component

