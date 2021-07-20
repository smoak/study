type HourglassSum = (input: number[][]) => number;
export const hourglassSum: HourglassSum = (input) => {
  const sums: number[] = [];
  for (let row = 0; row < input.length - 2; row++) {
    for (let col = 0; col < input.length - 2; col++) {
      const a = input[row][col];
      const b = input[row][col + 1];
      const c = input[row][col + 2];
      const d = input[row + 1][col + 1];
      const e = input[row + 2][col];
      const f = input[row + 2][col + 1];
      const g = input[row + 2][col + 2];
      const sum = a + b + c + d + e + f + g;
      sums.push(sum);
    }
  }

  return Math.max(...sums);
};
