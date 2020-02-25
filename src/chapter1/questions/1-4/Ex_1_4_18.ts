//他这个局部最小值的定义怪怪的
//看网上资料这题如果边界比隔壁小也算局部最小，所以一开始把边界判断了
//如果边界符合条件直接返回，否则一定有局部最小值（确实），这样就好理解了直接二分就完事了
//所谓2lgn其实和判断递增递减顺序有关，最差情况就是一直在第二个判断
const Ex_1_4_18 = (arr: number[]) => {
  if (arr.length < 2) {
    return -1;
  }
  if (arr[0] < arr[1]) {
    return 0;
  }
  if (arr[arr.length - 1] < arr[arr.length - 2]) {
    return arr.length - 1;
  }
  let lo = 0,
    hi = arr.length - 1;
  while (lo < hi - 1) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
      hi = mid - 1;
    } else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
      lo = mid - 1;
    } else if (arr[mid - 1] > arr[mid] && arr[mid] < arr[mid + 1]) {
      return mid;
    } else {
      //遇到局部最大值，说明有两个局部最小值咯，我们往左边走
      hi = mid - 1;
    }
  }
  return -1;
};

console.log(
  Ex_1_4_18([3, 2, 1, 0, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18])
);
