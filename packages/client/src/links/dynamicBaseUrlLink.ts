/**
 * tRPC v11 - dynamic-base-url-router
 */
export function createDynamicUrlLink(getUrl: () => string) {
  return () =>
    ({ op, next }: any) =>
      next(op);
}
