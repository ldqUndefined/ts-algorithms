import { Stack } from '../../implements/P94_Stack';

//两个栈实现，最差情况下发生在出栈为空时，需要2N次栈操作，N为队列长度
export class QueueWithTwoStack<T> {
  private inStack: Stack<T>;
  private outStack: Stack<T>;
  constructor() {
    this.inStack = new Stack<T>();
    this.outStack = new Stack<T>();
  }
  enqueue(value: T) {
    this.inStack.push(value);
  }
  dequeue(): T {
    if (this.inStack.isEmpty() && this.outStack.isEmpty()) {
      throw new Error('队列为空');
    }
    if (this.outStack.isEmpty()) {
      while (!this.inStack.isEmpty()) {
        this.outStack.push(this.inStack.pop()!);
      }
    }
    return this.outStack.pop()!;
  }
}

//六个栈的太难了看不懂
export class QueueWithSixStack<T> {}
