//随机算法,用于把数组随机打乱，Array.sort(()=>Math.random()-0.5)不靠谱
export const shuffle = <T>(arr: T[]): T[] => {
  let cur = arr.length;
  while (cur > 1) {
    let index = Math.floor(Math.random() * cur--);
    [arr[index], arr[cur]] = [arr[cur], arr[index]];
  }
  return arr;
};
