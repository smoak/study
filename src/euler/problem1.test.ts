import { sumMultiples } from "./problem1";

describe('#sumMultiples', () => {
  it('returns the correct sum of multiples below 10', () => {
    expect(sumMultiples(10)).toEqual(23);
  });

  it('returns the correct sum of multiples below 1000', () => {
    expect(sumMultiples(1000)).toEqual(233168);
  });
});