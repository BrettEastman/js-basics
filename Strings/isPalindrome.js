// Palindrome Check - algoexpert
// Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.

// My solution 12/9/22
function isPalindrome(string) {
  var reverseArr = [];
  for (var i = string.length - 1; i >= 0; i--) {
    reverseArr.push(string[i]);
  }
  var reverseStr = reverseArr.join('');
  return (reverseStr === string);
}

var word = 'yrekabakery';
console.log(isPalindrome(word));