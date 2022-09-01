// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
// The strings can contain white spaces or any type of characters.
// Bonus: Try solving this without RegEx.

function numInStr(arr) {
    // create result arr empty array
    var result = [];
    // iterate over the main arr
    for (var i = 0; i < arr.length; i++) {
        // create currentArr var splitting each index
        var currentArr = arr[i].split('');
        // iterate over currentArr
        for (var j = 0; j < currentArr.length; j++) {
          // if index is number
          var currentChar = Number.parseInt(currentArr[j]);
          if (Number.isInteger(currentChar)) {
            //push currentArr to result
            result.push(arr[i]);
            break;
          } 
        }
    }
    // return result
	return result;
}

console.log(numInStr(["1a", "a", "2b", "b"]));  // ➞ ["1a", "2b"]

console.log(numInStr(["abc", "abc10"]));  // ➞ ["abc10"]

console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));  // ➞ ["ab10c", "a10bc"]

console.log(numInStr(["this is a test", "test1"]));  // ➞ ["test1"]