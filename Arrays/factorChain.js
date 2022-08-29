// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

// [3, 6, 12, 36]
  // 3 is a factor of 6
  // 6 is a factor of 12
  // 12 is a factor of 36

// Create a function that determines whether or not an array is a factor chain.

// my solution:
function factorChain(arr) {
    var factor = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] % factor === 0) {
            factor = arr[i];
        } else {
            return false;
        }
    }
	return true;
}

// better solution:
const factorChain = arr => arr.slice(1).every((num, i) => num % arr[i] === 0);

console.log(factorChain([1, 2, 4, 8, 16, 32])); //➞ true

console.log(factorChain([1, 1, 1, 1, 1, 1])); //➞ true

console.log(factorChain([2, 4, 6, 7, 12])); //➞ false

console.log(factorChain([10, 1])); //➞ false