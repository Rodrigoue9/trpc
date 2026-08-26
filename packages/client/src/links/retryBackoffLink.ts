export function calculateBackoffDelay(
  attempt: number,
  baseMs = 100,
  maxMs = 3000,
): number {
  const exp = Math.min(attempt, 6);
  const delay = baseMs * Math.pow(2, exp);
  const jitter = Math.random() * 0.2 * delay;
  return Math.min(delay + jitter, maxMs);
}
