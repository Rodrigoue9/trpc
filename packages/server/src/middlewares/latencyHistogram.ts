export function recordLatencyBucket(
  durationMs: number,
  buckets: number[] = [10, 50, 100, 500, 1000],
): number {
  for (const b of buckets) {
    if (durationMs <= b) return b;
  }
  return Infinity;
}
