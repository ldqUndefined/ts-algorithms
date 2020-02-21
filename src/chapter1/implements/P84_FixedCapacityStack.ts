import { IteratorResult } from '../../Util';
export class FixedCapacityStack<T> {
  private arr: T[];
  constructor() {
    this.arr = [];
  }
  push(item: T) {
    this.arr.push(item);
  }
  pop(): T | undefined {
    return this.arr.pop();
  }
  isEmpty(): boolean {
    return this.arr.length === 0;
  }
  size(): number {
    return this.arr.length;
  }

  private [Symbol.iterator]() {
    let index = 0;
    let arr = this.arr;
    return {
      //这个next不这样写返回类型的话，下面的for(let s of a)时候s的类型定义会有undefined很恶心
      next(): IteratorResult<T> {
        return index < arr.length
          ? { value: arr[index++], done: false }
          : { value: undefined, done: true };
      }
    };
  }
}

//test
let a = new FixedCapacityStack<number>();
a.push(1);
a.push(2);
a.push(3);
a.push(800);
for (let s of a) {
  console.log(s);
}
