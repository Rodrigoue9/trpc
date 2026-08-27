/**
 * tRPC v11 - concurrency-throttle-link
 */
export function createConcurrencyThrottleLink(maxConcurrent = 5) { return () => ({ op, next }: any) => next(op); }
