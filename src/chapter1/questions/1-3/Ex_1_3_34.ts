import { IteratorResult, shuffle } from '../../../Util';
//用数组实现好了，方便点，他的难点在于实现随机
export class RandomBag<T> {
  private arr: T[];
  constructor() {
    this.arr = [];
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  size() {
    return this.arr.length;
  }
  add(value: T) {
    if (!this.arr.includes(value)) {
      this.arr.push(value);
    }
  }
  private [Symbol.iterator]() {
    //乱序之后返回数组自己的迭代器就好了
    let temp = [...this.arr];
    temp = shuffle(temp);
    return temp[Symbol.iterator]();
  }
}

let bag = new RandomBag<string>();
bag.add('1');
bag.add('2');
bag.add('3');
bag.add('4');

for (let s of bag) {
  console.log(s);
}
