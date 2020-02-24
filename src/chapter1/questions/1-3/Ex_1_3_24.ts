import { Node } from '../../implements/P89_Node';

export const removeAfter = <T>(node: Node<T> | null) => {
  if (!node || !node.next) {
    return;
  }
  node.next = node.next.next;
};
