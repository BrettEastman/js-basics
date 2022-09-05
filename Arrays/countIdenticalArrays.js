// Create a function that takes four arrays as arguments and returns a count of the total number of identical arrays.
// Don't forget to return the result.

// my version on 9/2/22:
function countIdenticalArrays(arr1, arr2, arr3, arr4) {
    // create count variable
    var count = 0;
    var obj = {};
    // create arrOfArrs using join for each
    var arrOfStrings = [arr1.join(''), arr2.join(''), arr3.join(''), arr4.join('')];
    // for loop to iterate over arrOfArrs
    for (var i = 0; i < arrOfStrings.length; i++) {
        if (obj[arrOfStrings[i]] === undefined) {
          obj[arrOfStrings[i]] = 1;
        } else {
          obj[arrOfStrings[i]]++;
        }
    }
    var most;
    for(var key in obj) {
        if (obj[most] === undefined) {
          most = key;
        }
        if (obj[key] > obj[most]) {
          most = key;
        }
    }
    if (obj[most] > 1) {
      count = obj[most];
    }
	  // return count
    return count;
}

console.log(countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0])); // ➞ 2

console.log(countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0])); // ➞ 0

console.log(countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0])); // ➞ 3
