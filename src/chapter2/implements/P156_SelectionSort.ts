//选择排序
//运行时间和输入无关，就算全部元素相同，或者已经排好序，都要进行相同多次的比较和交换
//平方级比较次数，N次交换次数，稳定的排序
//当前索引前的所有元素都是已排序的
//最好情况和最坏情况下都是 N平方/2 次比较，N次交换
export const selectionSort = (arr: number[]) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    //初始默认i最小
    let min = i;
    for (let j = 0; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    //交换元素
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
};
//
