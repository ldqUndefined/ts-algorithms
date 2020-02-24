import { shuffle } from '../../../Util';
export class RandomQueue<T> {
  private arr: T[];
  constructor() {
    this.arr = [];
  }
  isEmpty(): boolean {
    return this.arr.length === 0;
  }
  enqueue(value: T) {
    this.arr.push(value);
  }
  dequeue(): T {
    if (this.arr.length === 0) {
      throw new Error('队列为空');
    }
    let toChangeIndex = Math.floor(Math.random() * this.arr.length);
    let result = this.arr[toChangeIndex];
    this.arr[toChangeIndex] = this.arr.pop()!;
    return result;
  }
  sample(): T {
    let index = Math.floor(Math.random() * this.arr.length);
    return this.arr[index];
  }
  //Exercise 1.3.36
  private [Symbol.iterator]() {
    let temp = [...this.arr];
    temp = shuffle(temp);
    return temp[Symbol.iterator]();
  }
}

//test
let q = new RandomQueue<number>();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
for (let s of q) {
  console.log(s);
}
