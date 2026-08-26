/**
 * tRPC - Procedure Timeout Abort Link
 */
export interface TimeoutLinkOperation {
  path: string;
}

export function createTimeoutLink(timeoutMs = 10000) {
  return () =>
    <TOperation extends TimeoutLinkOperation, TResult>({
      op,
      next,
    }: {
      op: TOperation;
      next: (operation: TOperation) => Promise<TResult>;
    }) => {
      return new Promise<TResult>((resolve, reject) => {
        const timer = setTimeout(() => {
          reject(
            new Error(
              `tRPC request timed out after ${timeoutMs}ms for path: ${op.path}`,
            ),
          );
        }, timeoutMs);

        next(op)
          .then((res) => {
            clearTimeout(timer);
            resolve(res);
          })
          .catch((err) => {
            clearTimeout(timer);
            reject(err);
          });
      });
    };
}
