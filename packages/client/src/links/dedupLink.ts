/** Shares in-flight query promises for callers using the same request key. */
export class QueryDeduplicator {
  private pending = new Map<string, Promise<unknown>>();

  /**
   * Executes a request once per key while it is pending, preserving its
   * result type for callers and converting synchronous failures to rejections.
   */
  execute<T>(key: string, fn: () => Promise<T>): Promise<T> {
    const existing = this.pending.get(key);
    if (existing) return existing as Promise<T>;

    const pending = Promise.resolve()
      .then(fn)
      .finally(() => this.pending.delete(key));
    this.pending.set(key, pending);
    return pending;
  }
}
