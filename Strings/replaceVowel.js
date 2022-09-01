// Create a function that takes a string and replaces the vowels with another character. The input will always be in lowercase.

// a = 1
// e = 2
// i = 3
// o = 4
// u = 5

function replaceVowel(word) {
    // split word into an arr
    arr = word.split('');
    // iterate over the arr
    for (var i = 0; i < arr.length; i++) {
      // if arr[i] is a, reassign that index to 1
      if (arr[i] === 'a') {
        arr[i] = '1';
      // etc
      } else if (arr[i] === 'e') {
        arr[i] = '2';
      } else if (arr[i] === 'i') {
        arr[i] = '3';
      } else if (arr[i] === 'o') {
        arr[i] = '4';
      } else if (arr[i] === 'u') {
        arr[i] = '5';
      }
    }
    // return the arr rejoined into a string
	return arr.join('');
}

console.log(replaceVowel("karachi")); //➞ "k1r1ch3"

console.log(replaceVowel("chembur")); //➞ "ch2mb5r"

console.log(replaceVowel("khandbari")); //➞ "kh1ndb1r3"