export interface BatchItemResult<T> {
  id: string | number;
  result?: T;
  error?: Error;
}

export function isolateBatchResponses<T>(responses: BatchItemResult<T>[]): {
  successful: T[];
  failed: Error[];
} {
  const successful: T[] = [];
  const failed: Error[] = [];
  for (const r of responses) {
    if (r.error) failed.push(r.error);
    else if (r.result !== undefined) successful.push(r.result);
  }
  return { successful, failed };
}
