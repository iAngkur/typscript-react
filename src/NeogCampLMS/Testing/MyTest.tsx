import React from "react";

export function add(num1: number, num2: number): number {
  return num1 + num2;
}

export function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

// Previously
//console.log(add(2, 3) === 5 ? "Test passed" : "Test failed!");
//console.log(multiply(2, 3) === 6 ? "Test passed" : "Test failed!");

// My custom test function
/**
 * This function takes two arguments:
 * testname --> the name of the test case
 * callback --> returing either true or false
 *
 * Output: it sho8uld print the result of the test
 */
function test(testname: string, cb: () => {}) {
  console.info(`testing ${testname} :`);

  const testResult = cb();

  testResult
    ? console.log(`${testname} passed`)
    : console.error(`${testname} failed`);
}

//test("should test add two numbers", () => add(2, 3) === 5);
//test("should test multiply two numbers", () => multiply(2, 3) === 5);

function MyTest() {
  return <div>MyTest</div>;
}

export default MyTest;
