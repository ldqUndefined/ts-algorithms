export class Node<T> {
  item: T;
  next: Node<T> | null;
  constructor(value: T, next: Node<T> | null = null) {
    this.item = value;
    this.next = next;
  }
}
