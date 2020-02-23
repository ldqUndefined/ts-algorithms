import { Node } from '../implements/P89_Node';
export const moveToFront = (s: string) => {
  if (!s) {
    return null;
  }
  let preHead = new Node('', new Node(s[0]));
  for (let i = 1, len = s.length; i < len; i++) {
    let cur = preHead;
    while (cur.next) {
      if (cur.next.item === s[i]) {
        cur.next = cur.next.next;
        break;
      } else {
        cur = cur.next;
      }
    }
    let newHead = new Node(s[i], preHead.next);
    preHead.next = newHead;
  }
  return preHead.next;
};

let a = moveToFront('abcdacd');

for (let s of a!) {
  console.log(s);
}
