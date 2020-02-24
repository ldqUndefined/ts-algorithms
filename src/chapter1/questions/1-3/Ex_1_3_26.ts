import { Node } from '../../implements/P89_Node';

export const remove = <T>(first: Node<T> | null, key: T): Node<T> | null => {
  //声明一个虚拟的头结点可以少判断很多关于头部是否存在问题，看别人博客学来的
  let header = new Node<T>(null as any, first);
  let current = header;
  while (current.next) {
    if (current.next.item === key) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return header.next;
};

//test
let a = new Node('k');
let b = new Node('j', a);
let c: Node<string> | null = new Node('k', b);

c = remove(c, 'k');
console.log(c);
