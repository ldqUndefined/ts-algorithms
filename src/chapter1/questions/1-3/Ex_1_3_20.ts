import { Node } from '../../implements/P89_Node';

export const deleteK = <T>(
  first: Node<T> | null,
  k: number
): Node<T> | null => {
  if (!first) {
    throw new Error('链表为空');
  }
  if (k == 1) {
    return first.next;
  }
  let preK = first;
  while (k-- > 2) {
    preK = preK.next!;
    if (!preK.next) {
      throw new Error('k超出列表长度');
    }
  }
  preK.next = preK.next!.next;
  return first;
};

//test

let a = new Node('1');
let b = new Node('2', a);
let c: Node<string> | null = new Node('3', b);

c = deleteK(c, 1);
console.log(c);
