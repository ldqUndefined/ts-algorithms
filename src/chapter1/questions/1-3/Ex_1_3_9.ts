const isOperator = (s: string) => {
  return s === '+' || s === '-' || s === '*' || s === '/';
};

const isRight = (s: string) => {
  return s === ')';
};

const isLeft = (s: string) => {
  return s === '(';
};

const isNum = (s: string) => {
  return !isOperator(s) && !isLeft(s) && !isRight(s);
};

export const Ex_1_3_9 = (input: string): string => {
  let inputArr = input.split(' ');
  let operator: string[] = [];
  let value: string[] = [];
  for (let i = 0, len = inputArr.length; i < len; i++) {
    if (isNum(inputArr[i])) {
      value.push(inputArr[i]);
    } else if (isOperator(inputArr[i])) {
      operator.push(inputArr[i]);
    } else if (isRight(inputArr[i])) {
      let second = value.pop();
      let first = value.pop();
      let op = operator.pop();
      value.push(`( ${first} ${op} ${second} )`);
    }
  }
  return value[0];
};
//test
console.log(Ex_1_3_9('1 + 2 ) * 3 - 4 ) * 5 - 6 ) ) )'));
