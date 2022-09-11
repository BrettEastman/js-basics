// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// my solution:
var subtractProductAndSum = function(n) {
  var strNumArr = n.toString().split('');
  var sum = 0;
  var product = 1;
  for (var i = 0; i < strNumArr.length; i++) {
    sum += Number(strNumArr[i]);
    product *= Number(strNumArr[i]);
  }
  return product - sum; 
};

// Example 1:
console.log(subtractProductAndSum(234));
// Expected output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

console.log(subtractProductAndSum(4421));
// Expected output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21

// leetcode solution:
var subtractProductAndSum = function(n) {
  const digits = Array.from(String(n), Number)
  const sum = digits.reduce((a,b) => a+b)
  const product = digits.reduce((a,b) => a*b)
  return product-sum
};