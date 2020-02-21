import { IteratorResult } from '../../Util';
import { Node } from './P89_Node';

export class Stack<T> {
  private first: Node<T> | null;
  private length: number;
  constructor() {
    this.first = null;
    this.length = 0;
  }
  push(value: T) {
    let top = new Node<T>(value, this.first);
    this.first = top;
    this.length++;
  }
  pop(): T | undefined {
    if (!this.first) {
      return undefined;
    } else {
      let result = this.first.item;
      this.first = this.first.next;
      this.length--;
      return result;
    }
  }
  isEmpty(): boolean {
    return this.length === 0;
  }
  size(): number {
    return this.length;
  }
  private [Symbol.iterator]() {
    let theFirst = this.first;
    return {
      //next不显示写类型就会出现undefined
      next(): IteratorResult<T> {
        if (!theFirst) {
          return {
            value: undefined,
            done: true
          };
        } else {
          let item = theFirst.item;
          theFirst = theFirst.next;
          return {
            value: item,
            done: false
          };
        }
      }
    };
  }
}

//test
let a = new Stack<string>();

a.push('first');
a.push('second');
a.push('third');

for (let s of a) {
  console.log(s);
}
