import { Stack } from '../../implements/P94_Stack';
import { IteratorResult } from '../../../Util';
export class Buffer {
  private cursorLeft: Stack<string>;
  private cursorRight: Stack<string>;
  constructor() {
    this.cursorLeft = new Stack<string>();
    this.cursorRight = new Stack<string>();
  }
  insert(s: string) {
    this.cursorLeft.push(s);
  }
  delete(): string | undefined {
    return this.cursorLeft.pop();
  }
  left(k: number) {
    while (k-- > 0) {
      if (!this.cursorLeft.isEmpty()) {
        this.cursorRight.push(this.cursorLeft.pop()!);
      }
    }
  }
  right(k: number) {
    while (k-- > 0) {
      if (!this.cursorRight.isEmpty()) {
        this.cursorLeft.push(this.cursorRight.pop()!);
      }
    }
  }
  size() {
    return this.cursorLeft.size() + this.cursorRight.size();
  }
}
