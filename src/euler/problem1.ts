export const sumMultiples = (below: number) => {
  let sum = 0;

  for (let i = 0; i < below; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}