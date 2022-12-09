function twoNumberSum(array, targetSum) {
  // do a for loop to iterate through each number in array
  for (var i = 0; i < array.length; i++) {
    // do another forloop that is one index ahead of the above number
    for (var j = i + 1; j < array.length; j++) {
      // if the above number plus the below number equal the target,
      if (array[i] + array[j] === targetSum) {
        // create an array literal with the two numbers in it
        var result = [array[i], array[j]];
        // return the array
        return result;
      }
    }
  }
  // return empty arr
  return [];
}

var arr = [3, 5, -4, 8, 11, 1, -1, 6];
console.log(twoNumberSum(arr, 10));
