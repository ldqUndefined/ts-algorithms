//交换参数那个搞不太懂，没实现
export const Ex_2_2_11 = (arr: number[]) => {
  return merge(arr, 0, arr.length - 1);
};

const merge = (arr: number[], lo: number, hi: number) => {
  if (hi - lo < 14) {
    insert(arr, lo, hi);
    return;
  }
  let mid = Math.floor((lo + hi) / 2);
  merge(arr, lo, mid);
  merge(arr, mid + 1, hi);
  if (arr[mid] < arr[mid + 1]) {
    return;
  }
  mergeSort(arr, lo, mid, hi);
};

const insert = (arr: number[], lo: number, hi: number) => {
  for (let i = lo + 1; i <= hi; i++) {
    let j = i,
      temp = arr[j];
    for (; j > lo && temp < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = temp;
  }
};

const mergeSort = (arr: number[], lo: number, mid: number, hi: number) => {
  let temp = [];
  for (let k = lo; k <= hi; k++) {
    temp[k] = arr[k];
  }
  let i = lo,
    j = mid + 1;
  for (let k = lo; k <= hi; k++) {
    if (i > mid) {
      arr[k] = temp[j++];
    } else if (j > hi) {
      arr[k] = temp[i++];
    } else if (temp[i] < temp[j]) {
      arr[k] = temp[i++];
    } else {
      arr[k] = temp[j++];
    }
  }
};

let arr = [
  42314,
  235,
  334,
  534,
  5,
  432,
  5,
  5,
  7,
  63,
  63,
  2562,
  745,
  523,
  432,
  523,
  754,
  754,
  532,
  523
];
Ex_2_2_11(arr);
console.log(arr);
