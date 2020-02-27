//自顶向下的归并排序
export const TopBottomMerge = (
  arr: number[],
  lo: number = 0,
  hi: number = arr.length - 1
) => {
  //长度为1的数组
  if (lo >= hi) {
    return;
  }
  let mid = Math.floor((lo + hi) / 2);
  TopBottomMerge(arr, lo, mid);
  TopBottomMerge(arr, mid + 1, hi);
  sort(arr, lo, mid, hi);
};
//原地归并排序
const sort = (arr: number[], lo: number, mid: number, hi: number) => {
  //两个数组起始位置
  let i = lo,
    j = mid + 1;
  let temp = [];
  for (let k = 0; k <= hi; k++) {
    temp[k] = arr[k];
  }
  for (let k = 0; k <= hi; k++) {
    if (i > mid) {
      //左边数组用完了
      arr[k] = temp[j++];
    } else if (j > hi) {
      //右边数组用完了
      arr[k] = temp[i++];
    } else if (temp[i] < temp[j]) {
      //左边比右边小
      arr[k] = temp[i++];
    } else {
      //右边比左边小
      arr[k] = temp[j++];
    }
  }
};
