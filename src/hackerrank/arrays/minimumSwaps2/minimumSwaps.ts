const swap = (arr: number[], a: number, b: number) => {
  const temp = arr[b];
  arr[b] = arr[a];
  arr[a] = temp;
};

export const minimumSwaps = (arr: number[]) =>
  arr.reduce(
    ({ array, swaps }, _, index) => {
      const valueAtCurrentIndex = index + 1;

      if (valueAtCurrentIndex != array[index]) {
        const t = array.findIndex((value) => value === valueAtCurrentIndex);
        swap(array, index, t);
        swaps++;
      }

      return { array, swaps };
    },
    { array: [...arr], swaps: 0 }
  ).swaps;
