type EqualizeArray = (input: number[]) => number;
export const equalizeArray: EqualizeArray = (input) => {
  const { greatestValue } = input.reduce(
    ({ counts, greatestValue }, i) => {
      const updatedCounts = { [i]: counts[i] ? counts[i] + 1 : 1 };

      return {
        counts: {
          ...counts,
          ...updatedCounts,
        },
        greatestValue: updatedCounts[i] > greatestValue ? updatedCounts[i] : greatestValue,
      };
    },
    { counts: {} as Record<number, number>, greatestValue: 0 }
  );

  return input.length - greatestValue;
};
