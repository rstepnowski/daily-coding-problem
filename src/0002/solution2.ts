/* eslint-disable functional/no-let */
/* eslint-disable functional/no-loop-statement */
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/prefer-readonly-type */

/**
 * Simple linear solution - calculate partial products starting from left and right of 
 * the original array to be able to calculate the final
 * 
 * Time complexity - O(N) - array is iterated 3 times
 * Memory complexity - O(N) - 2 support arrays + result array
 * 
 * @param arr 
 */
const Solution2 = (arr: readonly number[]): readonly number[] => {
  const length = arr.length;
  const partialLeft: number[] = new Array(length);
  const partialRight: number[] = new Array(length);
  const product: number[] = new Array(length);

  if (length < 2) return [];

  partialLeft[0] = 1;
  partialRight[length - 1] = 1;

  for (let i = 1; i < length; i++) {
    partialLeft[i] = arr[i - 1] * partialLeft[i - 1];
  }

  for (let j = length - 2; j >= 0; j--) {
    partialRight[j] = arr[j + 1] * partialRight[j + 1];
  }

  for (let k = 0; k < length; k++) {
    product[k] = partialLeft[k] * partialRight[k];
  }

  return product;
};

export default Solution2;
