import { Node } from '../implements/P89_Node';

export const max = (first: Node<number> | null): number => {
  if (!first) {
    return 0;
  }
  let max = first.item;
  while (first.next) {
    if (first.next.item > max) {
      max = first.next.item;
    }
    first = first.next;
  }
  return max;
};
