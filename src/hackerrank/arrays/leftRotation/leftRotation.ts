type RotLeft = (a: number[], d: number) => number[];
export const rotLeft: RotLeft = (a, d) => {
  const rotations = d % a.length;
  const end = a.slice(0, rotations);
  const beginning = a.slice(rotations);

  return [...beginning, ...end];
};
