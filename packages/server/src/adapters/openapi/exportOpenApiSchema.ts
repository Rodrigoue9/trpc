export interface OpenApiRouteDefinition {
  path: string;
  method: string;
  summary: string;
}

export interface OpenApiSpecResult {
  openapi: '3.1.0';
  info: { title: string; version: string };
  paths: Record<
    string,
    Record<
      string,
      { summary: string; responses: Record<string, { description: string }> }
    >
  >;
}

/**
 * tRPC OpenAPI 3.1 schema exporter utility with strict TypeScript definitions.
 */
export function buildOpenApiSpec(
  title: string,
  version: string,
  routes: OpenApiRouteDefinition[],
): OpenApiSpecResult {
  const paths: OpenApiSpecResult['paths'] = {};
  for (const r of routes) {
    paths[r.path] = {
      [r.method.toLowerCase()]: {
        summary: r.summary,
        responses: {
          '200': { description: 'Successful response' },
          '400': { description: 'Bad request / validation error' },
        },
      },
    };
  }
  return {
    openapi: '3.1.0',
    info: { title, version },
    paths,
  };
}
