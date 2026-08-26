/**
 * tRPC - Query TTL Cache Link
 */
export function createTtlCacheLink(ttlMs = 60000) {
  const cache = new Map<string, { data: unknown; expiresAt: number }>();

  return () =>
    ({
      op,
      next,
    }: {
      op: { path: string; input: unknown };
      next: (op: unknown) => Promise<unknown>;
    }) => {
      const key = `${op.path}:${JSON.stringify(op.input)}`;
      const cached = cache.get(key);
      if (cached && Date.now() < cached.expiresAt) {
        return Promise.resolve(cached.data);
      }
      return next(op).then((data) => {
        cache.set(key, { data, expiresAt: Date.now() + ttlMs });
        return data;
      });
    };
}
