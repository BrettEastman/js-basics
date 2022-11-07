// Write a function that reverses all the words in a sentence that start with a particular letter.

// Notes
// Reverse the words themselves, not the entire sentence.
// All characters in the sentence will be in lower case.

// my solution:
function specialReverse(s, c) {
  var sArr = s.split(' ');
  var result = sArr.map(function(item, i, array) {
    if (item[0] === c) {
      item = item.split('').reverse().join('');
      return item;
    } else {
      return item;
    }
  });
  return result.join(' ');
}

// top solution:
function specialReverse(s, c) {
	return s.split(' ').map(x => x.startsWith(c) ? x.split('').reverse().join('') : x).join(' ')
}

// Examples
console.log(specialReverse("word searches are super fun", "s")) // ➞ "word sehcraes are repus fun"

console.log(specialReverse("first man to walk on the moon", "m")) // ➞ "first nam to walk on the noom"

console.log(specialReverse("peter piper picked pickled peppers", "p")) // ➞ "retep repip dekcip delkcip sreppep"
