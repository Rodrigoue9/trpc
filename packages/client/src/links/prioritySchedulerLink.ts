/**
 * tRPC - Priority Scheduler Link
 */
export type PriorityLevel = 'high' | 'normal' | 'background';

export function prioritizeBatchQueries<T extends { priority?: PriorityLevel }>(
  queries: T[],
): T[] {
  const priorityWeight: Record<PriorityLevel, number> = {
    high: 3,
    normal: 2,
    background: 1,
  };
  return [...queries].sort(
    (a, b) =>
      priorityWeight[b.priority ?? 'normal'] -
      priorityWeight[a.priority ?? 'normal'],
  );
}
