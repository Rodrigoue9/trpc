export class QueryDeduplicator {
  private pending = new Map<string, Promise<unknown>>();

  execute<T>(key: string, fn: () => Promise<T>): Promise<T> {
    const existing = this.pending.get(key);
    if (existing) return existing as Promise<T>;

    const pending = fn().finally(() => this.pending.delete(key));
    this.pending.set(key, pending);
    return pending;
  }
}
