export const quickSort = (
  arr: number[],
  lo: number = 0,
  hi: number = arr.length - 1
) => {
  if (lo >= hi) {
    return;
  }
  let j = partition(arr, lo, hi);
  quickSort(arr, lo, j - 1);
  quickSort(arr, j + 1, hi);
};

const partition = (arr: number[], lo: number, hi: number): number => {
  let i = lo,
    j = hi + 1,
    temp = arr[lo];
  while (true) {
    while (arr[++i] < temp) {
      if (i === hi) {
        break;
      }
    }
    while (arr[--j] > temp) {
      if (j === lo) {
        break;
      }
    }
    if (i >= j) {
      break;
    }
    exc(arr, i, j);
  }
  exc(arr, lo, j);
  return j;
};

const exc = (arr: number[], i: number, j: number) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

let arr = [
  432,
  43654,
  654,
  543,
  75,
  8,
  9,
  9,
  75,
  543,
  345,
  54,
  3254,
  2,
  765,
  43,
  75
];
quickSort(arr);
console.log(arr);
