// Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.
// If given an empty array, return an empty object (see example #4).
// The object should be in the same order as in the input array.

function getFrequencies(arr) {
    // write out edge case
    if (arr.length === 0) {
        return {};
    }
    // create an empty object
    var resultObj = {};
    // iterate through the array
    for (var i = 0; i < arr.length; i++) {
        // if the unique element is undefined as a key in the object
        if (resultObj[arr[i]] === undefined) {
            // then add it with a count of 1 as it's value
            resultObj[arr[i]] = 1;
        } else {
            // otherwise add one to it's count
            resultObj[arr[i]]++
        }
    }
    //return the object
	return resultObj;
}


console.log(getFrequencies(["A", "B", "A", "A", "A"])); //➞ { A: 4, B: 1 }

console.log(getFrequencies([1, 2, 3, 3, 2])); //➞ { "1": 1, "2": 2, "3": 2 }

console.log(getFrequencies([true, false, true, false, false])); //➞ { true: 2, false: 3 }

console.log(getFrequencies([])); //➞ {}