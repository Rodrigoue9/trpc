export function combineSignals(
  ...signals: (AbortSignal | undefined)[]
): AbortController {
  const ctrl = new AbortController();
  for (const s of signals) {
    if (s) {
      if (s.aborted) {
        ctrl.abort();
        break;
      }
      s.addEventListener('abort', () => ctrl.abort(), { once: true });
    }
  }
  return ctrl;
}
