export class DebounceLink {
  private timers = new Map<string, ReturnType<typeof setTimeout>>();
  schedule(key: string, fn: () => void, delayMs: number) {
    if (this.timers.has(key)) clearTimeout(this.timers.get(key));
    this.timers.set(
      key,
      setTimeout(() => {
        this.timers.delete(key);
        fn();
      }, delayMs),
    );
  }
}
