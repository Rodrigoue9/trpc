export interface BatchDedupOperation {
  path: string;
  input: unknown;
}

/** Shares a pending batch query result with callers using the same request. */
export function createBatchDedupLink() {
  const inFlight = new Map<string, Promise<unknown>>();

  return () =>
    <TOperation extends BatchDedupOperation, TResult>({
      op,
      next,
    }: {
      op: TOperation;
      next: (operation: TOperation) => Promise<TResult>;
    }): Promise<TResult> => {
      const key = `${op.path}:${JSON.stringify(op.input)}`;
      const existing = inFlight.get(key);
      if (existing) return existing as Promise<TResult>;

      const pending = Promise.resolve()
        .then(() => next(op))
        .finally(() => inFlight.delete(key));
      inFlight.set(key, pending);
      return pending;
    };
}
