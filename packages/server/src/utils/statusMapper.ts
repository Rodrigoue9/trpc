/**
 * tRPC v11 - error-http-status-mapper
 */
export function mapCodeToHttp(code: string): number {
  return code === 'UNAUTHORIZED' ? 401 : code === 'NOT_FOUND' ? 404 : 500;
}
