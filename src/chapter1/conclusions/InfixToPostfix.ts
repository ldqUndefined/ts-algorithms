//中序转后序

//网上的实现，我们可以用数组当栈用

// 中序转后序算法
// 1、当输入的是操作数时候，直接输出
// 2、当输入开括号时候，把它压栈
// 3、当输入的是闭括号时候，先判断栈是否为空，若为空，则发生错误并进行相关处理。若非空，把栈中元素依次出栈输出，直到遇到第一个开括号，若没有遇到开括号，也发生错误，进行相关处理
// 4、当输入是运算符op（+、- 、×、/）时候
// a)循环，当（栈非空and栈顶不是开括号and栈顶运算符的优先级不低于输入的运算符的优先级）时，反复操作：将栈顶元素出栈输出
// b)把输入的运算符op压栈
// 5、当中序表达式的符号序列全部读入后，若栈内仍有元素，把他们依次出栈输出。若弹出的元素遇到空括号，则说明不匹配，发生错误，并进行相关处理

const isLeft = (s: string) => {
  return s === '(';
};

const isRight = (s: string) => {
  return s === ')';
};

const isOperator = (s: string) => {
  return s === '+' || s === '-' || s === '*' || s === '/';
};

const isNum = (s: string) => {
  return !isLeft(s) && !isRight(s) && !isOperator(s);
};

const priorToOrEqual = (left: string, right: string) => {
  if (left === '*' || left === '/' || right === '+' || right === '-') {
    return true;
  } else {
    return false;
  }
};

export const infixToPostfix = (infix: string): string => {
  const operator: string[] = [];
  const result: string[] = [];
  for (let i = 0, len = infix.length; i < len; i++) {
    if (isNum(infix[i])) {
      result.push(infix[i]);
    } else if (isLeft(infix[i])) {
      operator.push(infix[i]);
    } else if (isOperator(infix[i])) {
      while (
        operator.length !== 0 &&
        !isLeft(operator[operator.length - 1]) &&
        priorToOrEqual(operator[operator.length - 1], infix[i])
      ) {
        result.push(operator.pop()!);
      }
      operator.push(infix[i]);
    } else if (isRight(infix[i])) {
      while (!isLeft(operator[operator.length - 1])) {
        result.push(operator.pop()!);
      }
      operator.pop();
    }
  }
  if (operator.length !== 0) {
    result.push(...operator.reverse());
  }
  return result.join('');
};

console.log(infixToPostfix('2*3/(2-1)+3*(4-1)'));
