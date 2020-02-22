import { Node } from '../implements/P89_Node';
//只能使用一个Node结点实例
export class Queue<T> {
  private last: Node<T> | null;
  private num: number;
  constructor() {
    this.last = null;
    this.num = 0;
  }
  //入列所需时间和长度相关
  enqueue(value: T) {
    if (!this.last) {
      let newNode = new Node(value);
      newNode.next = newNode;
      this.last = newNode;
    } else {
      let newNode = new Node(value, this.last);
      let cur = this.last;
      for (let i = 1; i < this.num; i++) {
        cur = cur.next!;
      }
      cur.next = newNode;
      this.last = newNode;
    }
    this.num++;
  }
  //出列所需时间也和长度相关
  dequeue(): T {
    //如果用num判断后面this.last类型可能为null很恶心
    if (!this.last) {
      throw new Error('队列为空');
    }
    if (this.num === 1) {
      let result = this.last.item;
      this.last = null;
      this.num = 0;
      return result;
    } else {
      let cur = this.last;
      for (let i = 1; i < this.num - 1; i++) {
        cur = cur.next!;
      }
      let result = cur.next!.item;
      cur.next = this.last;
      this.num--;
      return result;
    }
  }
  isEmpty(): boolean {
    return this.num === 0;
  }
  size(): number {
    return this.num;
  }
}

let a = new Queue<string>();
a.enqueue('first');
a.enqueue('second');
a.enqueue('third');
console.log(a);
console.log(a.dequeue());
console.log(a);
