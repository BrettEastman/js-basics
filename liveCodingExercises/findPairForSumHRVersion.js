// Instructions; Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// His version:

// Function:
function findPairForSum(integers, targetSum) {
    //create a result array
    var pair = [];
    // iterate over the integers (outer)
    for (var i = 0; i < integers.length; i++) {
      // iterate from the current integer over rest of integers (inner)
      for (var j = i + 1; j < integers.length; j++) {
        //check outer value plus inner (if sum is target sum)
        if (integers[i] + integers[j] === targetSum) {
          //push outer, then inner to result array
          pair.push(integers[i], integers[j]);
        }       
      }     
    }
    return pair;  
  }
  
  // ASSERTION FUNCTION:
  function assertArraysEqual(actual, expected, testName) {
    var sameLength = actual.length === expected.length;
    var sameValues = true;
    for (var i = 0; i < expected.length; i++) {
      if (actual[i] !== expected[i]) {
        sameValues = false;
        break;
      }
    }
    if (sameLength && sameValues) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + '] expected "' + expected + '" but got "' + actual + '"');
    }
  }
  
  // TESTS:
  var actualFound = findPairForSum([3, 34, 4, 12, 5, 2], 9);
  var expectedFound = [4, 5];
  assertArraysEqual(actualFound, expectedFound, 'should return an array of the two integers that sum to target');
  
  var actualNotFound = findPairForSum([3, 34, 17, 12, 5, 1], 11);
  var expectedNotFound = [];
  assertArraysEqual(actualFound, expectedFound, 'should return an empty array when sum cannot be made');