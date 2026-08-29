export function parseCookies(header = ''): Record<string, string> {
  const out: Record<string, string> = {};
  header.split(';').forEach((p) => {
    const [k, v] = p.split('=');
    if (k && v) out[k.trim()] = decodeURIComponent(v.trim());
  });
  return out;
}
