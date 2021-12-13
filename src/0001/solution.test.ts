import test from 'ava';

import Solution1 from './solution1';
import Solution2 from './solution1';

type SolutionFunction = (arr: readonly number[], k: number) => boolean;

// eslint-disable-next-line functional/prefer-readonly-type
const solutions: [string, SolutionFunction][] = [
  ['Solution1', Solution1],
  ['Solution2', Solution2],
];

solutions.forEach(([solutionName, sut]) => {

  test(`${solutionName}: example from description ([10,15,3,7], 17) => true`, (t) => {
    t.true(sut([10, 15, 3, 7], 17));
  });

  test(`${solutionName}: should return false on empty`, t => {
    t.false(sut([], 10));
  });

  test(`${solutionName}: should return false on single element array and k not matching`, t => {
    t.false(sut([5], 10));
  });

  test(`${solutionName}: should return false on 2 element array and k not matching`, t => {
    t.false(sut([1, 5], 10));
  });

  test(`${solutionName}: should return false when there is only one number in array that matches k`, t => {
    t.false(sut([10], 10));
  });

  test(`${solutionName}: should pass for 2 element array matching exactly k value`, (t) => {
    t.true(sut([10, 7], 17));
  });

  test(`${solutionName}: should pass for big array that has 1 match at the very end`, (t) => {
    t.true(sut([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 7], 17));
  });

  test(`${solutionName}: should pass for big array that has 1 match at the very begin`, (t) => {
    t.true(sut([10, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 17));
  });

  test(`${solutionName}: should pass for big array that has 2 matches`, (t) => {
    t.true(sut([10, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 12, 1, 1, 1], 17));
  });
});