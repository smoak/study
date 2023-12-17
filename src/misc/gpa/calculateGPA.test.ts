import { calculateGPA } from './calculateGPA';

describe('#calculateGPA', () => {
  describe('example 1', () => {
    const input = ['A'];
    const expected = 4;

    it('returns the expected result', () => {
      expect(calculateGPA(input)).toEqual(expected);
    });
  });

  describe('example 2', () => {
    const input = ['F', 'F', 'F'];
    const expected = 0;

    it('returns the expected result', () => {
      expect(calculateGPA(input)).toEqual(expected);
    });
  });

  describe('example 3', () => {
    const input = ['A', 'A-', 'B+', 'B', 'B-'];
    const expected = 3.3;

    it('returns the expected result', () => {
      expect(calculateGPA(input)).toEqual(expected);
    });
  });

  describe('example 4', () => {
    const input = ['A', 'B+', 'C-', 'A'];
    const expected = 3.3;

    it('returns the expected result', () => {
      expect(calculateGPA(input)).toEqual(expected);
    });
  });
});
