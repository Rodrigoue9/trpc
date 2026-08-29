export function stripCircular(obj: any, seen = new WeakSet()): any {
  if (obj !== null && typeof obj === 'object') {
    if (seen.has(obj)) return '[Circular]';
    seen.add(obj);
    const res: any = Array.isArray(obj) ? [] : {};
    for (const k in obj) res[k] = stripCircular(obj[k], seen);
    return res;
  }
  return obj;
}
