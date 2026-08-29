export function getHttpStatusForCode(code: string): number {
  const map: Record<string, number> = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    TIMEOUT: 408,
    CONFLICT: 409,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
  };
  return map[code] || 500;
}
