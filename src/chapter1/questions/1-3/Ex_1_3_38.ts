import { Node } from '../../implements/P89_Node';

export class GeneralizedQueue<T> {
  private head: Node<T> | null;
  private length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }
  isEmpty(): boolean {
    return this.length === 0;
  }
  insert(value: T) {
    let newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
  }
  delete(k: number): T {
    if (k > this.length) {
      throw new Error('K大于队列长度');
    }
    if (!this.head) {
      throw new Error('队列为空');
    }
    let cur = new Node(null as any, this.head);
    while (k++ < this.length) {
      cur = cur.next!;
    }
    let result = cur.next!.item;
    if (cur.next === this.head) {
      this.head = cur.next.next;
    }
    cur.next = cur.next!.next;
    return result;
  }
  //搞个返回head方便测试
  getHead() {
    return this.head;
  }
}

//test
let q = new GeneralizedQueue<string>();
q.insert('1');
q.insert('2');
q.insert('3');
q.insert('4');
q.delete(3);
for (let s of q.getHead()!) {
  console.log(s);
}
