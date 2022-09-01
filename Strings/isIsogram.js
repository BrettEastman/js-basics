// An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".
// Ignore letter case (should not be case sensitive).
// All test cases contain valid one word strings.

function isIsogram(str) {
    // create isIso boolean to true
    var isIso = true;
    // iterate through the string to check each letter one at a time
    for (var i = 0; i < str.length; i++) {
      // iterate through the rest of the string to see if any other letters match
      for (var j = i + 1; j < str.length; j++) {
        // if so, isIso is false
        if (str[i].toLowerCase() === str[j].toLowerCase()) {
            isIso = false;
        }
      }
    }
    // return isIso
	return isIso;
}

console.log(isIsogram("Algorism")); // ➞ true

console.log(isIsogram("PasSword")); // ➞ false
// Not case sensitive.

console.log(isIsogram("Consecutive")); // ➞ false

console.log(isIsogram("abcdefghijklmnop")); // ➞ true