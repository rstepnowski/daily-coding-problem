/**
 * Single pass solution - it checks for existence of a reminder value (k - currElem) 
 * to avoid checking for each possible pair. 
 * It uses object literal as map to get O(1) lookups and writes
 * 
 * O(N) - time complexity
 * O(N) - memory complexity
 * 
 * @param arr array of number to check
 * @param k value of pair of elements to search for
 */
const Solution2 = (arr: readonly number[], k: number): boolean => {

  const numSet: Record<number, boolean> = {};

  return arr.some(element => {
    const reminder = k - element;
    if (numSet[reminder]) return true;

    // eslint-disable-next-line functional/immutable-data
    numSet[element] = true;
    return false
  });
};

export default Solution2;