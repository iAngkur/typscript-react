import { capitalize, double, filterEven, sum, average } from "./utils";

describe("Utils", () => {
  describe("capitalize", () => {
    test("capitalizes the first letter of a string", () => {
      expect(capitalize("hello")).toBe("Hello");
      expect(capitalize("Hello")).toBe("Hello");
    });
    test("returns an empty string if input is empty", () => {
      expect(capitalize("")).toBe("");
    });
  });

  describe("double", () => {
    test("doubles each number in an array", () => {
      expect(double([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10]);
    });

    test("returns an emptry array if input is empty", () => {
      expect(double([])).toEqual([]);
    });
  });

  describe("filterEven", () => {
    test("returns even nubmers in an array", () => {
      expect(filterEven([1, 2, 3, 4, 8])).toEqual([2, 4, 8]);
      expect(filterEven([1, 3, 5, 9])).toEqual([]);
    });

    test("returns an empty arrary if input is emptry", () => {
      expect([]).toEqual([]);
    });
  });
});
