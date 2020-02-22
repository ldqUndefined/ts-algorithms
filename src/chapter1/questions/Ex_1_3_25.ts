import { Node } from '../implements/P89_Node';

export const insertAfter = <T>(
  first: Node<T> | null,
  second: Node<T> | null
) => {
  if (!first || !second) {
    return;
  }
  second.next = first.next;
  first.next = second;
};
