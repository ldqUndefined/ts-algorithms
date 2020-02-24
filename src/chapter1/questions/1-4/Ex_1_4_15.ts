//线性级别的，数组两端向中间走
const twoSumFaster = (arr: number[]): number => {
  //最小大于0或者最大小于0都可以直接得出结果为0
  if (arr.length === 0 || arr[0] > 0 || arr[arr.length - 1] < 0) {
    return 0;
  }
  let count = 0,
    lo = 0,
    hi = arr.length - 1;
  //整数对，只有1个0应该不算吧，这里就不是<=了
  while (lo < hi) {
    if (arr[lo] + arr[hi] < 0) {
      lo++;
    } else if (arr[lo] + arr[hi] > 0) {
      hi--;
    } else {
      count++;
      lo++;
      hi--;
    }
  }
  return count;
};

//一样的思想，内层循环头尾向中间走
const threeSumFaster = (arr: number[]): number => {
  if (arr.length < 3 || arr[0] > 0 || arr[arr.length] < 0) {
    return 0;
  }
  let count = 0;
  for (let i = 0, len = arr.length; i < len - 2; i++) {
    let lo = i + 1,
      hi = arr.length - 1;
    while (lo < hi) {
      if (arr[i] + arr[lo] + arr[hi] < 0) {
        lo++;
      } else if (arr[i] + arr[lo] + arr[hi] > 0) {
        hi--;
      } else {
        count++;
        lo++;
        hi--;
      }
    }
  }
  return count;
};
