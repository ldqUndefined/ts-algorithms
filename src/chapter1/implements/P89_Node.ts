import { IteratorResult } from '../../Util';
export class Node<T> {
  item: T;
  next: Node<T> | null;
  constructor(value: T, next: Node<T> | null = null) {
    this.item = value;
    this.next = next;
  }
  //搞个节点的迭代器，方便测试看每个节点的输出
  private [Symbol.iterator]() {
    //声明个虚拟的头结点，以this为下一个节点，方便判断
    let iteratorNode = new Node<T>(null as any, this);
    return {
      next(): IteratorResult<T> {
        if (iteratorNode.next) {
          let value = iteratorNode.next.item;
          iteratorNode = iteratorNode.next;
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
