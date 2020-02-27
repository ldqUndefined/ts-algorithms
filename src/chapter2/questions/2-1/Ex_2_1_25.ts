export const Ex_2_1_25 = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    //先拿到当前值，当退出循环时J就是要放进去的位置
    let j = i;
    let temp = arr[j];
    for (; j > 0 && temp < arr[j - 1]; j--) {
      arr[j] = arr[j--];
    }
    arr[j] = temp;
  }
};

//受2.1.24启发，也可以较少j的判断
export const Ex_2_1_25_better = (arr: number[]) => {
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
    let j = i;
    let temp = arr[j];
    for (; temp < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = temp;
  }
};
