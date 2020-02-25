//这个解法是线性对数级别的
//线性那个分治算法写不出来
const Ex_1_4_19 = (matrix: number[][]) => {
  let row = Math.floor((matrix.length - 1) / 2); //中间行
  let col = 0;
  let lo = 0,
    hi = matrix.length - 1;
  //获取中间行最小值
  for (let i = 0; i < matrix[row].length; i++) {
    if (matrix[row][i] < matrix[row][col]) {
      col = i;
    }
  }
  //
  while (
    !(
      (row === 0 || matrix[row][col] < matrix[row - 1][col]) &&
      (row === matrix.length - 1 || matrix[row][col] < matrix[row + 1][col])
    )
  ) {
    if (row === 0 || row === matrix.length - 1) {
      break;
    } else if (matrix[row][col] > matrix[row - 1][col]) {
      hi = row - 1;
      row = Math.floor((lo + hi) / 2);
    } else if (matrix[row][col] > matrix[row + 1][col]) {
      lo = row + 1;
      row = Math.floor((lo + hi) / 2);
    }

    for (let i = 0, len = matrix[row].length; i < len; i++) {
      if (matrix[row][i] < matrix[row][col]) {
        col = i;
      }
    }
  }
  return [row, col];
};

console.log(Ex_1_4_19([[1]]));
