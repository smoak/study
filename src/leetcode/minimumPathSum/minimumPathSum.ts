const cacheKeyFor = (x: number, y: number) => [x, y].join(',');

const calculateMinPathSum = (input: number[][], x: number, y: number, cache: Record<string, number>): number => {
  const value = input[y][x];
  const sums: number[] = [];
  const canGoRight = x + 1 < input[0].length;
  const canGoDown = y + 1 < input.length;
  const cacheRead = () => cache[cacheKeyFor(x, y)];
  const cacheWrite = (value: number) => {
    cache[cacheKeyFor(x, y)] = value;
    return value;
  };

  const fromCache = cacheRead();
  if (fromCache != null) {
    return fromCache;
  }

  if (!canGoRight && !canGoDown) {
    return cacheWrite(value);
  }

  if (canGoDown) {
    sums.push(cacheWrite(calculateMinPathSum(input, x, y + 1, cache)));
  }

  if (canGoRight) {
    sums.push(cacheWrite(calculateMinPathSum(input, x + 1, y, cache)));
  }

  return cacheWrite(value + Math.min(...sums));
};

export const minPathSum = (input: number[][]): number => calculateMinPathSum(input, 0, 0, {});
