// Create a function that takes in a sentence and a character to find. Return an object of each word in the sentence, with the count of the specified character as the value.
// The function shouldn't be case sensitive.
// Words in the dictionary should be in lowercase.
// You may be required to find punctuation.
// Duplicate words should be ignored (see example #3 for the word "an").

function findOccurrences(str, char) {
    // create array of words
    var wordArr = str.split(' ');
    // create an empty object
    var resultObj = {};
    // iterate over the array
    for (var i = 0; i < wordArr.length; i++) {
      // create current char array
      var currentChars = wordArr[i].split('');
      // create count array to zero
      var currentCount = 0;
      // iterate through char array
      for (var j = 0; j < currentChars.length; j++) {
        currentChars[j] = currentChars[j].toLowerCase();
        // if char in there
        if (currentChars[j] === char) {
          // add one to count
          currentCount++;
        }
      }
      var lowerWord = currentChars.join('');
      // if the current word is undefined as an object property
      if (resultObj[lowerWord] === undefined) {
        // add the property and set the key to the count
        resultObj[lowerWord] = currentCount
      }
    }
    // return the object
    return resultObj;	
}

console.log(findOccurrences("Hello World", "o")); // ➞ {
//     "hello" : 1,
//     "world" : 1
// }
  
console.log(findOccurrences("Create a nice JUICY function", "c")); // ➞  {
//     "create" : 1,
//     "a" : 0,
//     "nice" : 1,
//     "juicy" : 1,
//     "function" : 1
// }
  
console.log(findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A")); // ➞ {
//     "an" : 1,
//     "apple" : 1,
//     "a" : 1,
//     "day" : 1,
//     "keeps" : 0,
//     "archeologist" : 1,
//     "away..." : 2
// }