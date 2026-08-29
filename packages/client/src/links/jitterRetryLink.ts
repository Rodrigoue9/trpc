export function calcJitterBackoff(
  attempt: number,
  baseMs = 100,
  maxMs = 3000,
): number {
  const exp = Math.min(maxMs, baseMs * Math.pow(2, attempt));
  return Math.floor(Math.random() * exp);
}
