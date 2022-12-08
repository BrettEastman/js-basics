// Create a function to partition an array from left to right.

// Notes
// With an n input, your output should be an array containing n-1 subarrays. Each subarray should have two elements: the left and the right side of the partition (both should be non-empty, unless the input array is empty).
// An empty array should return an empty array: []

// Solutions from Edabit:
// #1
function movingPartition(arr) {
	const result = [];
	for (let i = 1; i < arr.length; i++)
		result.push([arr.slice(0, i), arr.slice(i)]);
	return result;
}

// #2
const movingPartition = arr =>
  arr.slice(1).map((_, i) => [arr.slice(0, i + 1), arr.slice(i + 1)]);

// #3
function movingPartition(arr) {
  return arr.reduce((acc, curr, idx) => {
    if (arr.length - 1 === idx) {
        return acc
    } else {
        acc.push([arr.slice(0, idx + 1), arr.slice(idx + 1)])
    }
    return acc;
  } , [])
}

// Examples:
console.log(movingPartition([-1, -1, -1, -1])); //➞ [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]

console.log(movingPartition([1, 2, 3, 4, 5])); //➞ [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]

console.log(movingPartition([])); // ➞ []
