export function checkPayloadSize(
  byteLength: number,
  maxBytes: number,
): boolean {
  return byteLength <= maxBytes;
}
