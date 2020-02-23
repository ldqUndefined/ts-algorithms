export class DoubleNode<T> {
  private item: T;
  private prev: DoubleNode<T> | null;
  private next: DoubleNode<T> | null;

  constructor(
    value: T,
    prev: DoubleNode<T> | null,
    next: DoubleNode<T> | null
  ) {
    this.item = value;
    this.prev = prev;
    this.next = next;
  }

  insertAfter = (item: T): DoubleNode<T> => {
    let node = new DoubleNode(item, this, this.next);
    if (this.next) {
      this.next.prev = node;
    }
    this.next = node;
    return node;
  };

  insertBefore = (item: T): DoubleNode<T> => {
    let node = new DoubleNode(item, this.prev, this);
    if (this.prev) {
      this.prev.next = node;
    }
    this.prev = node;
    return node;
  };

  delete = (): T => {
    let result = this.item;
    if (this.next) {
      this.next.prev = this.prev;
    }
    if (this.prev) {
      this.prev.next = this.next;
    }
    return result;
  };

  search = (value: T): DoubleNode<T> | null => {
    if (this.item === value) {
      return this;
    }
    //往前找
    let current: DoubleNode<T> | null = this;
    while (current.prev) {
      current = current.prev;
      if (current.item === value) {
        return current;
      }
    }
    //往后找
    current = this;
    while (current.next) {
      current = current.next;
      if (current.item === value) {
        return current;
      }
    }
    return null;
  };

  static insertAsHead = <T>(theNode: DoubleNode<T>, value: T) => {
    while (theNode.prev) {
      theNode = theNode.prev;
    }
    theNode.insertBefore(value);
  };
  static insertAsTail = <T>(theNode: DoubleNode<T>, value: T) => {
    while (theNode.next) {
      theNode = theNode.next;
    }
    theNode.insertAfter(value);
  };
  static deleteHead = <T>(theNode: DoubleNode<T>) => {
    while (theNode.prev) {
      theNode = theNode.prev;
    }
    theNode.delete();
  };
  static deleteTail = <T>(theNode: DoubleNode<T>) => {
    while (theNode.next) {
      theNode = theNode.next;
    }
    theNode.delete();
  };
  static insertBefore = <T>(theNode: DoubleNode<T>, value: T) => {
    theNode.insertBefore(value);
  };
  static insertAfter = <T>(theNode: DoubleNode<T>, value: T) => {
    theNode.insertAfter(value);
  };
  static deleteCertainNode = <T>(
    theNode: DoubleNode<T>,
    toDelete: DoubleNode<T>
  ) => {
    let node = theNode.search(toDelete.item);
    node && node.delete();
  };
}
