// Create a function that takes three parameters where:

// x is the start of the range (inclusive).
// y is the end of the range (inclusive).
// n is the divisor to be checked against.
// Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.

// input: start, end, divisor
// output: array

// My solution
function arrayOperation(x, y, n) {
    // create an integer arr variable
    var intArr = [];
    var result = [];
    // populate the arr with numbers beginning at start of range and ending after end of range.
    for (var i = x; i <= y; i++) {
        intArr.push(i);
    }
    // check to see if any numbers within the intArr are divisible by n. If so, push them to intArr
    for (var j = 0; j < intArr.length; j++) {
        if (intArr[j] % n === 0) {
            result.push(intArr[j]);
        }
    }
    return result;
}

// Better solution:
function arrayOperation(x, y, n) {
	var r = [];
  for (var i = x; i <= y; i++) {
		if (i % n == 0) r.push(i);
	}
  return r;
}

console.log(arrayOperation(1, 10, 3)) //➞ [3, 6, 9]

console.log(arrayOperation(7, 9, 2)) //➞ [8]

console.log(arrayOperation(15, 20, 7)) //➞ []