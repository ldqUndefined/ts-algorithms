import { Node } from '../implements/P89_Node';

export const find = <T>(first: Node<T> | null, key: T): boolean => {
  while (first) {
    if (first.item === key) {
      return true;
    }
    first = first.next;
  }
  return false;
};
