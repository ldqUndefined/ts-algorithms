import { DoubleNode } from '../implements/P89_Node';
import { IteratorResult } from '../../Util';
export class Deque<T> {
  private length: number;
  private left: DoubleNode<T> | null;
  private right: DoubleNode<T> | null;
  constructor() {
    this.length = 0;
    this.left = null;
    this.right = null;
  }
  isEmpty(): boolean {
    return this.length === 0;
  }
  size(): number {
    return this.length;
  }
  pushleft(value: T) {
    let newNode = new DoubleNode(value, null, this.left);
    if (this.left) {
      this.left.prev = newNode;
    }
    this.left = newNode;
    if (!this.right) {
      this.right = newNode;
    }
    this.length++;
  }
  pushRight(value: T) {
    let newNode = new DoubleNode(value, this.right, null);
    if (this.right) {
      this.right.next = newNode;
    }
    this.right = newNode;
    if (!this.left) {
      this.left = newNode;
    }
    this.length++;
  }
  popLeft(): T {
    if (!this.left) {
      throw new Error('队列长度为0');
    }
    let result = this.left.item;
    this.left = this.left.next;
    if (this.left) {
      this.left.prev = null;
    } else {
      this.right = null;
    }
    this.length--;
    return result;
  }
  popRight(): T {
    if (!this.right) {
      throw new Error('队列长度为0');
    }
    let result = this.right.item;
    this.right = this.right.prev;
    if (this.right) {
      this.right.next = null;
    } else {
      this.left = null;
    }
    this.length--;
    return result;
  }
  private [Symbol.iterator]() {
    let iterator = new DoubleNode(null as any, null, this.left);
    return {
      next(): IteratorResult<T> {
        if (iterator.next) {
          let value = iterator.next.item;
          iterator = iterator.next;
          return {
            value,
            done: false
          };
        } else {
          return {
            value: undefined,
            done: true
          };
        }
      }
    };
  }
}

//test
let q = new Deque<string>();
q.pushleft('1');
q.pushleft('2');
q.pushRight('3');
q.pushRight('4');
q.popRight();
for (let s of q) {
  console.log(s);
}
