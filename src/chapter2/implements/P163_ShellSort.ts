//速度比选择排序和插入排序快，通过间隔为h的多个有序数组，然后逐渐减小h到1，h=1时实际就是插入排序了

export const shellSort = (arr: number[]) => {
  let n = arr.length;
  let h = 1;
  while (h < Math.floor(n / 3)) {
    h = h * 3 + 1;
  }
  while (h >= 1) {
    for (let i = h; i < n; i++) {
      for (let j = i; j >= h && arr[j] < arr[j - h]; j = j - h) {
        let temp = arr[j];
        arr[j] = arr[j - h];
        arr[j - h] = arr[j];
      }
    }
    h = Math.floor(h / 3);
  }
};
