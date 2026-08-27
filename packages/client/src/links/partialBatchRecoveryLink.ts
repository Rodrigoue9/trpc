/**
 * tRPC v11 - partial-batch-failure-recovery
 */
export function createPartialRecoveryLink() { return () => ({ op, next }: any) => next(op); }
