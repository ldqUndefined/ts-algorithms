import { Node } from '../implements/P89_Node';

export const deleteTail = <T>(first: Node<T> | null): Node<T> | null => {
  if (!first) {
    throw new Error('本来就是空的');
  }
  if (first.next === null) {
    return null;
  }
  let next = first.next;
  let preTail = first;
  while (next && next.next) {
    next = next.next;
    preTail = preTail.next!;
  }
  preTail.next = null;
  return first;
};

//test

let a = new Node('third');
let b = new Node('second', a);
let c: Node<string> | null = new Node('first', b);

c = deleteTail(c);
c = deleteTail(c);
c = deleteTail(c);
console.log(c);
