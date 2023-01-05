// Write a function disemvowel that takes in a string and returns a new string with all vowels removed.

function disemvowel(string) {
  let newString = '';
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i].toLowerCase()) === - 1) {
      newString += string[i];
    }
  }
  return newString;
}

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'