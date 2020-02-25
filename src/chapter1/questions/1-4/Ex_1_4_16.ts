export const Ex_1_4_16 = (arr: number[]) => {
  //线性对数的排序
  arr.sort();
  let min = Number.MAX_SAFE_INTEGER;
  let result: number[] = [];
  //线性遍历
  for (let i = 0, len = arr.length - 1; i < len - 1; i++) {
    if (arr[i + 1] - arr[i] < min) {
      min = arr[i + 1] - arr[i];
      result = [arr[i], arr[i + 1]];
    }
  }
  return result;
};
