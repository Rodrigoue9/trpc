/**
 * tRPC v11 - procedure-deprecation-logger
 */
export function logDeprecation(name: string) {
  console.warn(`Procedure ${name} is deprecated`);
}
