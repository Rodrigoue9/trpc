/**
 * tRPC v11 - custom-auth-token-header-propagator
 */
export function createAuthHeaderLink(getToken: () => string) {
  return () =>
    ({ op, next }: any) =>
      next(op);
}
