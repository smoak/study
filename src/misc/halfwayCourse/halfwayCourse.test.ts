import { findHalfwayCourse, PrereqAndCourse } from './halfwayCourse';

describe('#findHalfwayCourse', () => {
  describe('example 1', () => {
    const input = [
      ['Foundations of Computer Science', 'Operating Systems'],
      ['Data Structures', 'Algorithms'],
      ['Computer Networks', 'Computer Architecture'],
      ['Algorithms', 'Foundations of Computer Science'],
      ['Computer Architecture', 'Data Structures'],
      ['Software Design', 'Computer Networks'],
    ] as PrereqAndCourse[];

    it('returns the expected result', () => {
      expect(findHalfwayCourse(input)).toEqual('Data Structures');
    });
  });

  describe('example 2', () => {
    const input = [
      ['Data Structures', 'Algorithms'],
      ['Algorithms', 'Foundations of Computer Science'],
      ['Foundations of Computer Science', 'Logic'],
    ] as PrereqAndCourse[];

    it('returns the expected result', () => {
      expect(findHalfwayCourse(input)).toEqual('Algorithms');
    });
  });
});
