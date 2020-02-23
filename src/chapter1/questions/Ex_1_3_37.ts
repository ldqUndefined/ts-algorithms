import { Queue } from '../implements/P95_Queue';

const josephus = (n: number, m: number) => {
  const queue = new Queue<Number>();
  for (let i = 0; i < n; i++) {
    queue.enqueue(i);
  }
  while (!queue.isEmpty()) {
    for (let i = 1; i < m; i++) {
      queue.enqueue(queue.dequeue()!);
    }
    console.log(queue.dequeue());
  }
};

console.log(josephus(7, 2));
