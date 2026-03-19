/**
 * Calculate project progress from grades (PHASE_1, PHASE_2, PHASE_3).
 * Each phase: 0 = Not Completed (0%), 1 = Partially Completed (50%), 2 = Completed (100%).
 * Overall progress = average of the 3 phases as percentage.
 */
export function calculateProgressFromGrades(grades: { component: string; marks: number }[]): number {
  const p1 = grades.find((g) => g.component === 'PHASE_1')?.marks ?? 0;
  const p2 = grades.find((g) => g.component === 'PHASE_2')?.marks ?? 0;
  const p3 = grades.find((g) => g.component === 'PHASE_3')?.marks ?? 0;

  const phasePoints =
    (p1 === 2 ? 1 : p1 === 1 ? 0.5 : 0) +
    (p2 === 2 ? 1 : p2 === 1 ? 0.5 : 0) +
    (p3 === 2 ? 1 : p3 === 1 ? 0.5 : 0);

  return Math.round((phasePoints / 3) * 100);
}

/**
 * Fallback: progress from completed meetings (5 phases, 20% each).
 */
export function calculateProgressFromMeetings(meetings: { meetingstatus?: string | null }[]): number {
  const completedCount = meetings?.filter((m) => m.meetingstatus === 'completed').length || 0;
  return Math.min(completedCount * 20, 100);
}

/**
 * Get progress: prefer grade-based, fall back to meeting-based.
 */
export function getProjectProgress(project: {
  grade?: { component: string; marks: number }[];
  projectmeeting?: { meetingstatus?: string | null }[];
}): number {
  // Prefer grade-based progress when grades exist
  if (project.grade?.length) {
    return calculateProgressFromGrades(project.grade);
  }
  // Fallback to meeting-based progress
  return calculateProgressFromMeetings(project.projectmeeting || []);
}
