export interface DeprecationMeta {
  isDeprecated?: boolean;
  deprecationReason?: string;
  alternative?: string;
}
export function markProcedureDeprecated(
  meta: DeprecationMeta,
): DeprecationMeta {
  return { ...meta, isDeprecated: true };
}
