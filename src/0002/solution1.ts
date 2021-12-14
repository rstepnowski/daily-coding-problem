
/**
 * Naive solution - fist attempt, just calculate partial product as we go
 * 
 * Time complexity - O(N^2)
 * Memory complexity - O(N)
 * 
 * @param arr 
 */
const Solution1 = (arr: readonly number[]): readonly number[] => {

  const calcProduct = (input: readonly number[], indexToSkip: number): number => {
    const product = input.reduce((previousValue, currentValue, currentIndex) => {
      if (currentIndex !== indexToSkip)
        return previousValue * currentValue;
      else
        return previousValue;
    }, 1); // 1 is neutral element of multiplication
    return product
  }

  // a workaround for the ambiguity around empty and 1 element arrays 
  if (arr.length < 2) return [];

  return arr.map((_number, index) => calcProduct(arr, index));
};

export default Solution1;
