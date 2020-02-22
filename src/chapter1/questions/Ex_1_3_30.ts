import { Node } from '../implements/P89_Node';

//靠每次写这个翻转节点不看答案都想不起来怎么写我佛了
export const reverse = <T>(first: Node<T> | null): Node<T> | null => {
  let prev: Node<T> | null = null; //逆序头

  while (first) {
    let second = first.next; //second是顺序头的第二个节点
    first.next = prev; //把顺序头第一个节点变成逆序头第一个节点
    prev = first; //prev获取逆序头的引用
    first = second; //first获取顺序头的引用
  }
  //顺序头为空说明反转完毕，返回逆序头
  return prev;
};

//啊递归真难，不看答案写不出
export const reverseRecurison = <T>(first: Node<T> | null): Node<T> | null => {
  if (!first) {
    return null;
  }
  if (!first.next) {
    return first;
  }
  let second = first.next;
  let result = reverseRecurison(second);
  second.next = first;
  first.next = null;
  return result;
};

let a = new Node('3', new Node('2', new Node('1', new Node('0'))));
for (let s of a) {
  console.log(s);
}
console.log('-------------');
a = reverse(a)!;
for (let s of a) {
  console.log(s);
}
