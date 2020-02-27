export const Ex_2_2_10 = (
  arr: number[],
  lo: number = 0,
  hi: number = arr.length - 1
) => {
  if (lo >= hi) {
    return;
  }
  let mid = Math.floor((lo + hi) / 2);
  Ex_2_2_10(arr, lo, mid);
  Ex_2_2_10(arr, mid + 1, hi);
  sort(arr, lo, mid, hi);
};

const sort = (arr: number[], lo: number, mid: number, hi: number) => {
  let i = lo,
    j = hi,
    temp = [];
  //前面一半
  for (let k = lo; k <= mid; k++) {
    temp[k] = arr[k];
  }
  //倒序进去
  for (let k = mid + 1; k <= hi; k++) {
    temp[k] = arr[hi - k + mid + 1];
  }
  //开始排，不用判断i和j是否溢出
  for (let k = lo; k <= hi; k++) {
    if (temp[i] < temp[j]) {
      arr[k] = temp[i++];
    } else {
      arr[k] = temp[j--];
    }
  }
};
let arr = [
  321,
  532,
  543,
  436,
  435,
  5,
  3,
  436,
  3,
  7,
  423,
  534,
  234,
  6,
  2,
  22,
  35,
  43,
  534,
  55,
  0
];
Ex_2_2_10(arr);
console.log(arr);
