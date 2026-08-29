export class ExecutionTimeline {
  private marks: Array<{ name: string; timestamp: number }> = [];
  mark(name: string) {
    this.marks.push({ name, timestamp: Date.now() });
  }
  getTimeline() {
    return [...this.marks];
  }
}
