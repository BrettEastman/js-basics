// Write a function to replace all instances of character c1 with character c2 and vice versa.

// Both characters will show up at least once in the string.

function doubleSwap(str, c1, c2) {
  // create strArr with split
  var strArr = str.split('');
  // iterate over the strArr
  for (var i = 0; i < strArr.length; i++) {
    // if i is c1
    if (strArr[i] === c1) {
      // then reassign it to c2
      strArr[i] = c2;
    } else if (strArr[i] === c2) {
      strArr[i] = c1
    }
  }
  // return strArr rejoined
  return strArr.join('');
}


console.log(doubleSwap( "aabbccc", "a", "b")); // ➞ "bbaaccc"

console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&")); // ➞ "random w&rds writt#n h#r#"

console.log(doubleSwap("128 895 556 788 999", "8", "9")); // ➞ "129 985 556 799 888"