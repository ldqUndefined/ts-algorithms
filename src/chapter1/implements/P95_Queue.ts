import { Node } from './P89_Node';
import { IteratorResult } from '../../Util';

export class Queue<T> {
  private first: Node<T> | null;
  private last: Node<T> | null;
  private length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value: T) {
    let newNode = new Node<T>(value);
    if (!this.last) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue(): T | undefined {
    if (!this.first) {
      return undefined;
    } else {
      let result = this.first.item;
      let next = this.first.next;
      this.first = next;
      if (!next) {
        this.last = null;
      }
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
    let head = this.first;
    return {
      next(): IteratorResult<T> {
        if (!head) {
          return {
            value: undefined,
            done: true
          };
        } else {
          let value = head.item;
          head = head.next;
          return {
            value,
            done: false
          };
        }
      }
    };
  }
}

//test
// let a = new Queue<string>();
// a.enqueue('first');
// a.enqueue('second');
// a.enqueue('third');
// for (let s of a) {
//   console.log(s);
// }
