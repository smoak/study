import { hourglassSum } from './hourglassSum';

describe('#hourglassSum', () => {
  describe('example 1', () => {
    const input: number[][] = [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 4, 4, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 1, 2, 4, 0],
    ];

    it('returns the execpted output', () => {
      expect(hourglassSum(input)).toBe(19);
    });
  });
});
