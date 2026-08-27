/**
 * tRPC v11 - deep-freeze-immutability-helper
 */
export function deepFreeze<T>(obj: T): T { return Object.freeze(obj); }
