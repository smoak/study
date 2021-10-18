import { minimumSwaps } from './minimumSwaps';

describe('.minimumSwaps', () => {
  describe('test case 0', () => {
    const testInput = [4, 3, 1, 2];
    const testOutput = 3;

    it('should match the result', () => {
      expect(minimumSwaps(testInput)).toBe(testOutput);
    });
  });

  describe('test case 1', () => {
    const testInput = [2, 3, 4, 1, 5];
    const testOutput = 3;

    it('should match the result', () => {
      expect(minimumSwaps(testInput)).toBe(testOutput);
    });
  });

  describe('test case 2', () => {
    const testInput = [1, 3, 5, 2, 4, 6, 7];
    const testOutput = 3;

    it('should match the result', () => {
      expect(minimumSwaps(testInput)).toBe(testOutput);
    });
  });

  describe('test case 3', () => {
    const testInput = [7, 1, 3, 2, 4, 5, 6];
    const testOutput = 5;

    it('should match the result', () => {
      expect(minimumSwaps(testInput)).toBe(testOutput);
    });
  });
});
