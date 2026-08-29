export function isSchemaCompatible(
  clientVer: string,
  serverVer: string,
): boolean {
  const cMajor = clientVer.split('.')[0];
  const sMajor = serverVer.split('.')[0];
  return cMajor === sMajor;
}
