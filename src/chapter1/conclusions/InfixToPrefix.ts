//中序转前序
//下面是网上算法实现，我们可以用数组然后只用push和pop模拟栈

//中序转前序算法
// 1、反转输入字符串，如“2*3/(2-1)+3*(4-1)” 反转后为“ )1-4(*3+)1-2(/3*2”，
// 2、从字符串中取出下一个字符
// 　　2.1.如果是操作数，则直接输出
// 　　2.2.如果是“)”，压入栈中
// 　　2.3.如果是运算符但不是“(”，“)”,则不断循环进行以下处理
// 　　　　2.3.1.如果栈为空，则此运算符进栈，结束此步骤
// 　　　　2.3.2.如果栈顶是“)”,则此运算符进栈，结束此步骤
// 　　　　2.3.2.如果此运算符与栈顶优先级相同或者更高，此运算符进栈，结束此步骤
// 　　　　2.3.4.否则，运算符连续出栈输出，直到满足上述三个条件之一，然后此运算符进栈
// 　　2.4、如果是“(”，则运算符连续出栈输出，直到遇见“)”为止,将“)”出栈且丢弃之
// 3、如果还有更多的字符串，则转到第2步
// 4、不在有未处理的字符串了，输出栈中剩余元素
// 5、再次反转字符串得到最终结果

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

export const infixToPrefix = (infix: string): string => {
  const operator: string[] = []; //操作栈，放操作符和进行操作的地方
  const result: string[] = []; //结果栈，结果栈reverse之后就是结果
  //从后往前读字符
  for (let i = infix.length - 1; i >= 0; i--) {
    if (isNum(infix[i])) {
      //操作数压进结果栈
      result.push(infix[i]);
    } else if (isRight(infix[i])) {
      //又括号直接进操作栈
      operator.push(infix[i]);
    } else if (isOperator(infix[i])) {
      while (
        !(
          isRight(operator[operator.length - 1]) ||
          operator.length === 0 ||
          priorToOrEqual(infix[i], operator[operator.length - 1])
        )
      ) {
        //不满足就一直弹操作栈到结果栈
        result.push(operator.pop()!);
      }
      //满足就压栈
      operator.push(infix[i]);
    } else if (isLeft(infix[i])) {
      //遇到左括号就一直弹操作栈到结果栈，右括号不进结果栈
      while (!isRight(operator[operator.length - 1])) {
        result.push(operator.pop()!);
      }
      operator.pop();
    }
  }
  //操作栈还有值则弹入结果栈
  //相当于
  // while(operator.length!==0){
  //   result.push(operator.pop()!)
  // }
  if (operator.length !== 0) {
    result.push(...operator.reverse());
  }
  //弹栈顺序就是结果，相当于将数组反转的结果
  return result.reverse().join('');
};

//test
console.log(InfixToPrefix('2*3/(2-1)+3*(4-1)'));
