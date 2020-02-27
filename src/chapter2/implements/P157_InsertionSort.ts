//插入排序
//运行时间和数组内原来的排序状况有关
//在随机排列的数组中，平均要进行 N平方/4 次比较和 N平方/4 次交换
//最差情况要进行 N平方/2 次比较和 N平方/2 次交换
//最好情况下要进行 N-1 次比较和 0 次交换
//左侧总是有序的
//对于部分有序的数组性能很好
export const insertionSort = (arr: number[]) => {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
};
