// Create a function to count the number of 1s in a 2D array.

// my solution:
function countOnes(matrix) {
    var ones = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentArr = matrix[i];
        for (var j = 0; j < currentArr.length; j++) {
            if (currentArr[j] === 1) {
                ones++;
            }
        }
    }
	return ones;
}

// better solution:
const countOnes = matrix => matrix.flat().filter(x=> x === 1).length

console.log(countOnes([
    [1, 0],
    [0, 0]
  ])) //➞ 1
  
console.log(countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
  ])) //➞ 7
  
console.log(countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33]
  ])) //➞ 2