export const Ex_2_1_24 = (arr: number[]) => {
  //找出最小并换到第一个
  let min = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[min]) {
      min = i;
    }
  }
  let temp = arr[0];
  arr[0] = arr[min];
  arr[min] = temp;
  for (let i = 2; i < arr.length; i++) {
    //因为我们在循环开始之前就知道左边有个最小值了，所以不需要j>0，因为j肯定大于0
    for (let j = i; arr[j - 1] < arr[j]; j--) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
};
