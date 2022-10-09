// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
// Note that multiple kids can have the greatest number of candies.

// Constraints:

// n == candies.length
// 2 <= n <= 100
// 1 <= candies[i] <= 100
// 1 <= extraCandies <= 50

function kidsWithCandies(candies, extraCandies) {
  var max = Math.max(...candies);
  // create boolsArr
  var boolsArr = [];
  // iterate through candies arr
  for (var i = 0; i < candies.length; i++) {
    // create currentNum (candies plus extra)
    var currentNum = candies[i] + extraCandies;
    boolsArr.push(currentNum >= max);
  }
  // return boolsArr
  return boolsArr;
};


// assert functions:
function assertArraysEqual(actual, expected, testName) {
  var sameLength = actual.length === expected.length;
  var sameValues = true
  for (var i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      sameValues = false;
      break;
    }
  }
  if (sameValues && sameLength) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] expected ' + expected + ' but got ' + actual);
  }
}


// tests:

// Example 1:
var actual1 = kidsWithCandies([2,3,5,1,3], 3);
var expected1 = [true,true,true,false,true];
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
assertArraysEqual(actual1, expected1, 'test to see if arrays are equal');

// Example 2:
var actual2 = kidsWithCandies([4,2,1,1,2], 1);
var expected2 = [true,false,false,false,false];
// Explanation: There is only 1 extra candy.
// Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
assertArraysEqual(actual2, expected2, 'test to see if arrays are equal');

// Example 3:
var actual3 = kidsWithCandies([12,1,12], 10);
var expected3 = [true,false,true];
assertArraysEqual(actual3, expected3, 'test to see if arrays are equal');

