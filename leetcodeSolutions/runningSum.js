// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.
//Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

var runningSum = function(nums) {
    return nums.map(function(element, i, arr) {
        if (i === 0) {
           return element; 
        } else {
           return arr[i] = element + nums[i - 1];
        }
    });   
}

var nums = [1,2,3,4]
// --> Output: [1,3,6,10]

// best version:
const runningSum = nums => {
    nums.reduce((a,c,i,arr) => arr[i] += a)
    return nums
}

/*
a: accumulator
c: current value
i: index
arr: source array
*/
