/**
 * trpc / trpc OpenAPI 3.1 schema exporter utility
 */
export function buildOpenApiSpec(title: string, version: string, routes: Array<{ path: string; method: string; summary: string }>) {
  const paths: Record<string, any> = {};
  for (const r of routes) {
    paths[r.path] = {
      [r.method.toLowerCase()]: {
        summary: r.summary,
        responses: {
          '200': { description: 'Successful response' },
          '400': { description: 'Bad request / validation error' }
        }
      }
    };
  }
  return {
    openapi: '3.1.0',
    info: { title, version },
    paths
  };
}
