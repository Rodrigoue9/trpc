export interface SlidingWindowRateLimitOptions {
  key: string;
  limit: number;
  windowMs: number;
  now?: number;
}

export class SlidingWindowRateLimiter {
  private requests = new Map<string, number[]>();

  isAllowed({
    key,
    limit,
    windowMs,
    now = Date.now(),
  }: SlidingWindowRateLimitOptions): boolean {
    const timestamps = (this.requests.get(key) ?? []).filter(
      (t) => now - t < windowMs,
    );
    if (timestamps.length >= limit) return false;
    timestamps.push(now);
    this.requests.set(key, timestamps);
    return true;
  }
}
