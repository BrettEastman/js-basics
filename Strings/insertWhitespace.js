// Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
// Each word in the phrase will be at least two characters long.

function insertWhitespace(s) {
  // create strArr with split
  var strArr = s.split(['']);
  // iterate through strArr
  for (var i = 0; i < strArr.length; i++) {
    // if i is the same as capital i and i - 1 is the same as lowercase 1 - 1
    if (i > 0 && strArr[i] === strArr[i].toUpperCase() && strArr[i - 1] === strArr[i - 1].toLowerCase()) {
      // splice in a space character
      strArr.splice(i, 0, " ");
      i++;
    }
  }
  // return strArr rejoined
	return strArr.join('');
}

console.log(insertWhitespace("SheWalksToTheBeach")); //➞ "She Walks To The Beach"

console.log(insertWhitespace("MarvinTalksTooMuch")); //➞ "Marvin Talks Too Much"

console.log(insertWhitespace("TheGreatestUpsetInHistory")); //➞ "The Greatest Upset In History"