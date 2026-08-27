/**
 * tRPC v11 - payload-gzip-size-estimator
 */
export function estimateGzipSize(str: string): number { return Math.ceil(str.length * 0.4); }
