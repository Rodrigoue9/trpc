export class QueryDeduplicator {
  private pending = new Map<string, Promise<any>>();
  execute(key: string, fn: () => Promise<any>): Promise<any> {
    if (this.pending.has(key)) return this.pending.get(key);
    const p = fn().finally(() => this.pending.delete(key));
    this.pending.set(key, p);
    return p;
  }
}
