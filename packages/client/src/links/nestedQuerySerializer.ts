/**
 * tRPC v11 - nested-param-query-serializer
 */
export function serializeNestedParams(params: Record<string, any>): string {
  return new URLSearchParams(params).toString();
}
