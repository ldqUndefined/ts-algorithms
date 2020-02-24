import { Stack } from '../../implements/P94_Stack';

const Parentheses = (s: string): boolean => {
  const stack = new Stack<string>();
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    }
    if (
      (s[i] === ')' && (stack.isEmpty() || stack.pop() !== '(')) ||
      (s[i] === '}' && (stack.isEmpty() || stack.pop() !== '{')) ||
      (s[i] === ']' && (stack.isEmpty() || stack.pop() !== '['))
    ) {
      return false;
    }
  }
  return true;
};
//test
console.log(Parentheses('[()]{}{[()()]()}'));
console.log(Parentheses('[(])'));
