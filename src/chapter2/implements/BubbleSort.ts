//冒泡排序，每一次外循环都会生成一个最大值"冒"到数组最后
//最好情况下要进行 n平方/2 次比较 ，0 次交换
//最差星狂下要进行 n平方/2 次比较 ， n平方/2 次交换
export const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
};
