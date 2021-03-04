import { equalizeArray } from './equalizeArray';

describe('#equalizeArray', () => {
  describe('example 1', () => {
    const input = [1, 2, 2, 3];

    it('returns the expected result', () => {
      expect(equalizeArray(input)).toBe(2);
    });
  });

  describe('example 2', () => {
    const input = [3, 3, 2, 1, 3];

    it('returns the expected result', () => {
      expect(equalizeArray(input)).toBe(2);
    });
  });

  describe('example 3', () => {
    const input = [1, 2, 3, 4];

    it('returns the expected result', () => {
      expect(equalizeArray(input)).toBe(3);
    });
  });

  describe('example 4', () => {
    const input = [1, 2, 3, 1, 2, 3, 3, 3];

    it('returns the expected result', () => {
      expect(equalizeArray(input)).toBe(4);
    });
  });
});
