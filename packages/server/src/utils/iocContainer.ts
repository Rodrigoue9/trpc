/**
 * tRPC v11 - context-dependency-container
 */
export class Container {
  private deps = new Map();
  register(k: string, v: any) {
    this.deps.set(k, v);
  }
  get(k: string) {
    return this.deps.get(k);
  }
}
