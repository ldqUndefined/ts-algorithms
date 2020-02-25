//最差情况三次二分查找，3lgN
const Ex_1_4_20 = (arr: number[], key: number) => {
  let spliceIndex = searchTopPoint(arr);
  let middle = Math.floor(arr.length / 2);
  if (spliceIndex < middle) {
    let index = binarySearch(arr, key, 0, spliceIndex);
    if (index >= 0) {
      return index;
    }
    return binarySearchDesc(arr, key, spliceIndex + 1, arr.length - 1);
  } else {
    let index = binarySearchDesc(arr, key, spliceIndex + 1, arr.length - 1);
    if (index >= 0) {
      return index;
    }
    return binarySearch(arr, key, 0, spliceIndex);
  }
};

const searchTopPoint = (arr: number[]): number => {
  let lo = 0,
    hi = arr.length - 1;
  while (lo !== hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] > arr[mid + 1]) {
      hi = mid;
    } else if (arr[mid] < arr[mid + 1]) {
      lo = mid + 1;
    }
  }
  return lo;
};

const binarySearch = (arr: number[], key: number, lo: number, hi: number) => {
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] < key) {
      lo = mid + 1;
    } else if (arr[mid] > key) {
      hi = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const binarySearchDesc = (
  arr: number[],
  key: number,
  lo: number,
  hi: number
) => {
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] < key) {
      hi = mid - 1;
    } else if (arr[mid] > key) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

console.log(Ex_1_4_20([5, 6, 7, 8, 9, 10, 4, 3, 2, 1], 10));
