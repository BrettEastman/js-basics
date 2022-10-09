// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

var numIdenticalPairs = function(nums) {
  var goodPairs = 0;
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        goodPairs++;
      }
    }
  }
  return goodPairs;
};

// Example 1:
console.log(numIdenticalPairs([1,2,3,1,1,3]))
// Expected output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
console.log(numIdenticalPairs([1,1,1,1]))
// Expected output: 6
// Explanation: Each pair in the array are good.

// Example 3:
console.log(numIdenticalPairs([1,2,3]))
// Output: 0