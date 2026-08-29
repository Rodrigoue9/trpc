export class SSEHeartbeatMonitor {
  private lastPing = Date.now();
  recordPing() {
    this.lastPing = Date.now();
  }
  isStale(timeoutMs = 15000): boolean {
    return Date.now() - this.lastPing > timeoutMs;
  }
}
