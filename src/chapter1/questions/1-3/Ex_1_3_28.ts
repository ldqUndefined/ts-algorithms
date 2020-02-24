import { Node } from '../../implements/P89_Node';

export const max = (first: Node<number> | null): number => {
  if (!first) {
    return 0;
  }
  if (!first.next) {
    return first.item;
  }
  return Math.max(first.item, max(first.next));
};

//test
let a = new Node(78);
let b = new Node(456, a);
let c = new Node(12, b);
console.log(max(c));
