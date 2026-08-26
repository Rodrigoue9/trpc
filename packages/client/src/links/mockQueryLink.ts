/**
 * Enterprise Framework - mock-query-resolver
 */
export function createMockLink(mockData: any) { return () => () => Promise.resolve(mockData); }
