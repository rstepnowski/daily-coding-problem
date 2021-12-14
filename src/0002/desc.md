Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?


-----
Note:

The original task description leave a bit of ambiguity around what is the expected behavior for empty arrays and arrays with 1 element.

Assuming that the product of an empty array should output an empty array then the output for [1] should be empty array as well.

Most of solutions that can be found on the internet that uses division,pow or log's to calculate the new elements by: `output[i] = productOfAllElements / elementToOmit`
assumes that arrays do not contain 0s which doesn't seem correct to me.