// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:
// findBrokenKeys(correct phrase, what you actually typed)

// Broken keys should be ordered by when they first appear in the sentence.
// Only one broken key per letter should be listed.
// Letters will all be in lower case.

function findBrokenKeys(str1, str2) {
  // create brokenKeys arr
  var brokenKeys = [];
  // iterate through the first string
  for (var i = 0; i < str1.length; i++) {
    // if str1[i] is not equal to str2[i]
    if (str1[i] !== str2[i] && brokenKeys.indexOf(str1[i]) === -1) {
      // add that letter to brokenKeys arr
      brokenKeys.push(str1[i]);
    }
  }
  // return broken keys arr
	return brokenKeys;
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday")); // ➞ ["p"]

console.log(findBrokenKeys("starry night", "starrq light")); // ➞ ["y", "n"]

console.log(findBrokenKeys("beethoven", "affthoif5")); // ➞ ["b", "e", "v", "n"]