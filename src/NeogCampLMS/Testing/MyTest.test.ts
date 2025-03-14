import { add, multiply } from "./MyTest";

test("It should add two numbers", () => {
  const sum = add(2, 3);
  expect(sum).toBe(5);
});
