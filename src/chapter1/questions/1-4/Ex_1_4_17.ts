//就是找最大最小值
const Ex_1_4_17 = (arr: number[]) => {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (let a of arr) {
    if (a < min) {
      min = a;
    } else if (a > max) {
      max = a;
    }
  }
  return [min, max];
};
