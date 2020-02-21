export class FixedCapacityStackOfStrings {
  arr: string[];
  constructor() {
    this.arr = [];
  }
  push(s: string) {
    this.arr.push(s);
  }
  pop(): string | undefined {
    return this.arr.pop();
  }
  isEmpty(): boolean {
    return this.arr.length === 0;
  }
  size(): number {
    return this.arr.length;
  }
}
