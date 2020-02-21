interface IteratorResultNotDone<T> {
  value: T;
  done: false;
}
interface IteratorResultDone {
  value: undefined;
  done: true;
}

export type IteratorResult<T> = IteratorResultNotDone<T> | IteratorResultDone;
