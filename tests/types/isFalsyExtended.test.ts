import isFalsyExtended from "../../src/lib/types/isFalsyExtended";
describe("isFalsyExtended", () => {
  it("should return true for empty array", () => {
    expect(isFalsyExtended([])).toBe(true);
  });
  it("should return true for empty object", () => {
    expect(isFalsyExtended({})).toBe(true);
  });
  it("should return true for empty string", () => {
    expect(isFalsyExtended("")).toBe(true);
  });
  it("should return true for null", () => {
    expect(isFalsyExtended(null)).toBe(true);
  });
  it("should return true for undefined", () => {
    expect(isFalsyExtended(undefined)).toBe(true);
  });
  it("should return true for NaN", () => {
    expect(isFalsyExtended(NaN)).toBe(true);
  });
  it("should return true for 0", () => {
    expect(isFalsyExtended(0)).toBe(true);
  });
  it("should return true for false", () => {
    expect(isFalsyExtended(false)).toBe(true);
  });
  it("should return false for true", () => {
    expect(isFalsyExtended(true)).toBe(false);
  });
  it("should return false for 1", () => {
    expect(isFalsyExtended(1)).toBe(false);
  });
  it("should return false for 'a'", () => {
    expect(isFalsyExtended("a")).toBe(false);
  });
  it("should return false for [1]", () => {
    expect(isFalsyExtended([1])).toBe(false);
  });
  it("should return false for {a:1}", () => {
    expect(isFalsyExtended({ a: 1 })).toBe(false);
  });
  it("should return true for [{},{}]", () => {
    expect(isFalsyExtended([{}, {}])).toBe(true);
  });
  it("should return false for [{a:1},{b:2}]", () => {
    expect(isFalsyExtended([{ a: 1 }, { b: 2 }])).toBe(false);
  });
  it("should return true for [{a:1},{b:2},null]", () => {
    expect(isFalsyExtended([{ a: 1 }, { b: 2 }, null])).toBe(true);
  });
  it("should return true for [{a:1},{b:2},undefined]", () => {
    expect(isFalsyExtended([{ a: 1 }, { b: 2 }, undefined])).toBe(true);
  });
});
