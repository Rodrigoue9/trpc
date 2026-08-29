export function formatSanitizedError(
  err: Error,
  isDev = false,
): { message: string; stack?: string } {
  return { message: err.message, ...(isDev ? { stack: err.stack } : {}) };
}
