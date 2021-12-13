/* eslint-disable functional/no-let */
/**
 * Naive solution, imperative style, no optimizations 
 * 
 * O(N^2) - time complexity
 * O(1) - memory complexity 
 * 
 * @param arr array of number to check
 * @param k value of pair of elements to search for
 */
const Solution1 = (arr: readonly number[], k: number): boolean => {
  // eslint-disable-next-line functional/no-loop-statement
  for (let index = 0; index < arr.length; index++) {
    // eslint-disable-next-line functional/no-loop-statement
    for (let index2 = index + 1; index2 < arr.length; index2++) {
      if (arr[index] + arr[index2] === k) return true;
    }
  }
  return false;
};

export default Solution1;
