import test from 'ava';

import Solution1 from './solution1';
import Solution2 from './solution2';
import Solution3 from './solution3';

type SolutionFunction = (input: readonly number[]) => readonly number[];

// eslint-disable-next-line functional/prefer-readonly-type
const solutions: [string, SolutionFunction][] = [
  ['Solution1', Solution1],
  ['Solution2', Solution2],
  ['Solution3', Solution3],
];

solutions.forEach(([solutionName, sut]) => {

  test(`${solutionName}: description example1 [1, 2, 3, 4, 5] should output [120, 60, 40, 30, 24]`, (t) => {
    t.deepEqual(sut([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
  });

  test(`${solutionName}: description example2 [3, 2, 1], should output [2, 3, 6]`, (t) => {
    t.deepEqual(sut([3, 2, 1]), [2, 3, 6]);
  });

  test(`${solutionName}: empty array input should generate empty output`, (t) => {
    t.deepEqual(sut([]), []);
  });

  test(`${solutionName}: 1 element array input should output []`, (t) => {
    t.deepEqual(sut([123]), []);
  });

  test(`${solutionName}: 1 element array input with 0 as element`, (t) => {
    t.deepEqual(sut([0]), []);
  });

  test(`${solutionName}: 2 element array input should output invert the order in array`, (t) => {
    t.deepEqual(sut([3, 7]), [7, 3]);
  });

  test(`${solutionName}: 2 element array (negative numbers) input should output invert the order in array`, (t) => {
    t.deepEqual(sut([-3, -7]), [-7, -3]);
  });

  test(`${solutionName}: 2 element array (negative and positive numbers) input should output invert the order in array`, (t) => {
    t.deepEqual(sut([-3, 7]), [7, -3]);
  });

  test(`${solutionName}: 2 element array with 0s input should output invert the order in array`, (t) => {
    t.deepEqual(sut([0, 0]), [0, 0]);
  });

  test(`${solutionName}: 3 element array of 1s should output the same array`, (t) => {
    t.deepEqual(sut([1, 1, 1]), [1, 1, 1]);
  });

  test(`${solutionName}: 3 element array of 0s should output the same array`, (t) => {
    t.deepEqual(sut([0, 0, 0]), [0, 0, 0]);
  });

  test(`${solutionName}: 3 element array of -1s should output [1, 1, 1]`, (t) => {
    t.deepEqual(sut([-1, -1, -1]), [1, 1, 1]);
  });

  test(`${solutionName}: 4 element array of -1s should output [-1, -1,- 1, -1]`, (t) => {
    t.deepEqual(sut([-1, -1, -1, -1]), [-1, -1, -1, -1]);
  });

  test(`${solutionName}: 4 element array that contains at least one 0 element (at the end)`, (t) => {
    t.deepEqual(sut([2, 3, 4, 0]), [0, 0, 0, 24]);
  });

  test(`${solutionName}: 4 element array that contains at least one 0 element (at the beginning)`, (t) => {
    t.deepEqual(sut([0, 2, 3, 4]), [24, 0, 0, 0]);
  });

  test(`${solutionName}: 4 element array that contains at least one 0 element (in the middle)`, (t) => {
    t.deepEqual(sut([2, 0, 3, 4]), [0, 24, 0, 0]);
  });

  test(`${solutionName}: 5 element array - random values`, (t) => {
    t.deepEqual(sut([10, 3, 5, 6, 2]), [180, 600, 360, 300, 900]);
  });
});