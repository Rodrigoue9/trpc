/**
 * tRPC v11 - websocket-binary-arraybuffer-decoder
 */
export function decodeBuffer(buf: ArrayBuffer): string {
  return new TextDecoder().decode(buf);
}
