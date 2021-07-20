import { rotLeft } from './leftRotation';

describe('.leftRotation', () => {
  let result: ReturnType<typeof rotLeft>;
  describe('test case 0', () => {
    const testInput = [1, 2, 3, 4, 5];

    beforeEach(() => {
      result = rotLeft(testInput, 4);
    });

    it('matches the result', () => {
      expect(result).toEqual([5, 1, 2, 3, 4]);
    });
  });

  describe('test case 1', () => {
    const testCase = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51];

    beforeEach(() => {
      result = rotLeft(testCase, 10);
    });

    it('matches the result', () => {
      expect(result).toEqual([77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84, 77]);
    });
  });

  describe('test case 2', () => {
    const testCase = [33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97];

    beforeEach(() => {
      result = rotLeft(testCase, 13);
    });

    it('matches the result', () => {
      expect(result).toEqual([87, 97, 33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60]);
    });
  });
});
