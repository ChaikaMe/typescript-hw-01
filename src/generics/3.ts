function merge<A extends object, B extends object>(objA: A, objB: B): object {
  return Object.assign(objA, objB);
}
