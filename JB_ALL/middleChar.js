// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// Examples:
// getMiddle("test") should return "es" getMiddle("testing") should return "t" getMiddle("middle") should return "dd" getMiddle("A") should return "A"

// Input
// A word (string) of length 0 < str < 1000

// Output
// The middle character(s) of the word represented as a string.

function getMiddle(string) {
  // create an empty middleString var
  var middleString = '';
  // find out if length of string is even or odd
  if (string.length % 2 === 1) {
  // if odd 
    // divide length and round up, this will be the index
    var index = Math.ceil(string.length / 2);
    // concatenate this index char to the middleString
    middleString += string[index - 1];
  } else {
  // else
    // divide length and round down, add this index and index plus one
    var index = Math.floor(string.length / 2);
    // concatenate this index char and index plus 1 to the middleString
    middleString += string[index - 1];
    middleString += string[index];
  }
  // return middleString
  return middleString;
}


console.log(getMiddle("test"));

console.log(getMiddle("great"));

console.log(getMiddle("AB"));
console.log(getMiddle("testing"))
