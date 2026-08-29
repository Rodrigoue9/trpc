export class SlidingWindowRateLimiter {
  private hits = new Map<string, number[]>();
  constructor(
    public windowMs: number,
    public maxHits: number,
  ) {}
  isAllowed(ip: string): boolean {
    const now = Date.now();
    const timestamps = (this.hits.get(ip) || []).filter(
      (t) => now - t < this.windowMs,
    );
    if (timestamps.length >= this.maxHits) return false;
    timestamps.push(now);
    this.hits.set(ip, timestamps);
    return true;
  }
}
