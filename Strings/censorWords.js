// Create a function that takes a string and censors words over four characters with *.
// Don't censor words with exactly four characters.
// If all words have four characters or less, return the original string.
// The amount of * is the same as the length of the word.

function censor(str) {
	// create strArr with string split
    var strArr = str.split(' ');
    // iterate over each word
    for (var i = 0; i < strArr.length; i++){
      // create starWord var
      var starWord;
      // if greater than 4 chars
      if (strArr[i].length > 4){
        // starWord = strArr[i]
        starWord = strArr[i];
        // create stars var
        var stars = '';
        // for length of word
        for (var j = 0; j < starWord.length; j++) {
            // concatenate * to stars var
            stars += '*';
        }
        strArr[i] = stars;
      }
    }
    // return strArr rejoined
    return strArr.join(' ');
}

console.log(censor("The code is fourty")); // ➞ "The code is ******"

console.log(censor("Two plus three is five")); // ➞ "Two plus ***** is five"

console.log(censor("aaaa aaaaa 1234 12345")); // ➞ "aaaa ***** 1234 *****"