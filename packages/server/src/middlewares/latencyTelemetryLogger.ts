/**
 * trpc / trpc procedure latency & percentile telemetry logger
 */
export function calculatePercentiles(samples: number[]): {
  p50: number;
  p95: number;
  p99: number;
} {
  if (!samples.length) return { p50: 0, p95: 0, p99: 0 };
  const sorted = [...samples].sort((a, b) => a - b);
  const getP = (p: number) =>
    sorted[Math.min(Math.floor((p / 100) * sorted.length), sorted.length - 1)];
  return {
    p50: getP(50),
    p95: getP(95),
    p99: getP(99),
  };
}
