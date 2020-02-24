import { Stack } from '../../implements/P94_Stack';

let a = new Stack<string>();

a.push('hahh');
a.push('fdsfsdafsda');
a.push('35235235');

// for (let s of a) {
//   console.log(s);
// }

let b = Stack.copy(a);
console.log(a === b);
for (let s of b) {
  console.log(s);
}
