// Create a function that returns true if two arrays contain identical values, and false otherwise.

// To solve this question, your friend writes the following code:

// function checkEquals(arr1, arr2) {
//   if (arr1 === arr2) {
//     return true
//    } else {
//     return false
//    }
//   }

// Hint: This has to do with value vs. reference types.

function checkEquals(arr1, arr2) {
  var sameLength = arr1.length === arr2.length;
  var sameValues = true;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      sameValues = false;
    }
  }
  if (sameLength && sameValues) {
    return true;
  } else {
    return false;
  }
}

console.log(checkEquals([1, 2], [1, 3])); // ➞ false

console.log(checkEquals([1, 2], [1, 2])); // ➞ true

console.log(checkEquals([4, 5, 6], [4, 5, 6])); // ➞ true

console.log(checkEquals([4, 7, 6], [4, 5, 6])); // ➞ false

console.log(checkEquals([4, 7, 6], [4, 6, 7])); // ➞ false