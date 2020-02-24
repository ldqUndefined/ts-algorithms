//输入后序表达式并且输出值
//模仿输入，需要将输入的字符用空格分开

export const evaluatePostfix = (input: string) => {
  const inputArr = input.split(' ');
  const value: number[] = [];
  for (let i = 0, len = inputArr.length; i < len; i++) {
    if (inputArr[i] === '+') {
      let second = value.pop()!;
      let first = value.pop()!;
      value.push(first + second);
    } else if (inputArr[i] === '-') {
      let second = value.pop()!;
      let first = value.pop()!;
      value.push(first - second);
    } else if (inputArr[i] === '*') {
      let second = value.pop()!;
      let first = value.pop()!;
      value.push(first * second);
    } else if (inputArr[i] === '/') {
      let second = value.pop()!;
      let first = value.pop()!;
      value.push(first / second);
    } else {
      value.push(Number(inputArr[i]));
    }
  }
  return value[0];
};

console.log(evaluatePostfix('1 2 + 3 * 6 2 / -'));

//前序也顺便写了好了
export const evaluatePrefix = (input: string) => {
  const inputArr = input.split(' ');
  const value: number[] = [];
  for (let i = inputArr.length - 1; i >= 0; i--) {
    if (inputArr[i] === '+') {
      let first = value.pop()!;
      let second = value.pop()!;
      value.push(first + second);
    } else if (inputArr[i] === '-') {
      let first = value.pop()!;
      let second = value.pop()!;
      value.push(first - second);
    } else if (inputArr[i] === '*') {
      let first = value.pop()!;
      let second = value.pop()!;
      value.push(first * second);
    } else if (inputArr[i] === '/') {
      let first = value.pop()!;
      let second = value.pop()!;
      value.push(first / second);
    } else {
      value.push(Number(inputArr[i]));
    }
  }
  return value[0];
};

console.log(evaluatePrefix('+ / * 2 3 - 2 1 * 3 - 4 1'));

//中序也顺便写好了
export const evaluateInfix = (input: string) => {
  const inputArr = input.split(' ');
};
