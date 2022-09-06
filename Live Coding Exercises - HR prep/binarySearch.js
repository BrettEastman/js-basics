// Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

// Given a sorted array, such as this:
// [1, 3, 16, 22, 31, 33, 34]

// You can search for the value 31, as follows:

// 1) Pick the midpoint: 22.
// 2) The value is higher than 22, so now consider only the right half of the previous array:
// [...31, 33, 34]
// 3) Pick the midpoint: 33
// 4) The value is lower than 33, so now consider only the left half of the previous array:
// [...31...]
// 5) Pick the midpoint: 31
// 6) You've hit the value.
// 7) Return the index of the value.

// Notes:
// * If you don't find the value, you can return null.
// * If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).

//input is an array of numbers
//output is the index of the number we are looking for

// FUNCTION:
function binarySearch(arr, value) {
    var low = 0;
    var high = arr.length - 1;
  
    while (low <= high) {
      var mid = Math.floor((low + high) / 2);
  
      if (arr[mid] === value) {
        return mid;
      } else if (arr[mid] > value) {
        //search to the left of middle
        high = mid - 1;
      } else {
        //search to the right of middle
        low = mid + 1;
      }
    }
    return null;
  }
  
  // ASSERTION FUNCTION:
  function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + '] expected "' + expected + '" but got "' + actual + '"')
    }
  }
  
  // TEST:
  var inputArr1 = [1, 3, 16, 22, 31, 33, 34];
  var number1 = 31;
  var actual1 = binarySearch(inputArr1, number1);
  assertEqual(actual1, 4, 'should log passed to indicate we found the value');
  
  var inputArr2 = [1, 3, 16, 22, 31, 33, 34, 40, 55];
  var number2 = 30;
  var actual2 = binarySearch(inputArr2, number2);
  assertEqual(actual2, null, 'should log passed to indicate we did not find the value');