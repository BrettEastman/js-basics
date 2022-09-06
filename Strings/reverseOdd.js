// Given a string, reverse all the words which have odd length. The even length words are not changed.

// There is exactly one space between each word and no punctuation is used.

function reverseOdd(str) {
  // create strArr with split
  var strArr = str.split(' ');
  // iterate over the arr
  for (var i = 0; i < strArr.length; i++) {
    // if an index contains a word with an odd length
    if (strArr[i].length % 2 === 1) {
      // currentWord var - split that word to an arr
      var currentWordArr = strArr[i].split('');
      // reassign that index the reverse of that word (rejoined)
      strArr[i] = currentWordArr.reverse().join('');
    }
  }
  // return rejoined strArr
	return strArr.join(' ');
}

console.log(reverseOdd("Bananas")); //➞ "sananaB"

console.log(reverseOdd("One two three four")); //➞ "enO owt eerht four"

console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length")); //➞ "Make sure you only reverse words of odd length"