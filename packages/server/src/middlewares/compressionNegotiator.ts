export function negotiateCompression(
  acceptEncoding: string,
): 'br' | 'gzip' | 'deflate' | 'identity' {
  if (acceptEncoding.includes('br')) return 'br';
  if (acceptEncoding.includes('gzip')) return 'gzip';
  if (acceptEncoding.includes('deflate')) return 'deflate';
  return 'identity';
}
