/* eslint-disable functional/immutable-data */

/**
 * Linear solution utilizing division of product of all non-zero elements in the input array.
 * It counts number of zeros in the input array to take advantage of the fact that if there at least 2 zeros
 * in the input the whole output will be filled with 0s
 * 
 * Time complexity - O(N) - array is iterated 2 times
 * Memory complexity - O(1)
 * 
 * @param arr 
 */
const Solution3 = (arr: readonly number[]): readonly number[] => {
  if (arr.length < 2) return [];

  const {productOfAll, zeroCount} = arr.reduce((acc, currValue) => {
    if (currValue === 0) {
      acc.zeroCount++;
      return acc;
    }

    acc.productOfAll *= currValue;
    return acc;
  },
    {
      productOfAll: 1,
      zeroCount: 0
    }
  );

  // if there are 2 or more elements that are 0 then all elements of the result will be 0s
  if (zeroCount > 1) return new Array(arr.length).fill(0);

  return arr.map((value) => {
    // division can be replaced with multiplication by Math.pow(value,-1);
    if (zeroCount === 0) return productOfAll / value;

    // current value is not the only 0 in the array -> result will be 0 for this index
    if (zeroCount === 1 && value !== 0) return 0;

    // when the current value is the only 0 in the array 
    return productOfAll;
  });
};

export default Solution3;
