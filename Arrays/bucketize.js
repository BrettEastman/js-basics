// Write a function that divides a phrase into word buckets, with each bucket containing n or fewer characters. Only include full words inside each bucket.
// Spaces count as one character.
// Trim beginning and end spaces for each word bucket (see final example).
// If buckets are too small to hold a single word, return an empty array: []
// The final goal isn't to return just the words with a length equal (or lower) to the given n, but to return the entire given phrase bucketized (if possible). So, for the specific case of "by" the only word with a proper length, the phrase can't be bucketized, and the returned array has to be empty.


// Brett's version 9/4/22
function bucketize(phrase, n) {
    var result = [];

    var splitPhrase = phrase.split(' ');
    // edge case: eliminate buckets that are too small
    var tooSmall = false;
    for (var i = 0; i < splitPhrase.length; i++) {
      if (splitPhrase[i].length > n) {
        tooSmall = true;
      }
    }
    if (tooSmall) {
      return [];
    }
    
    // then the main code:
    while (splitPhrase.length > 0) {
        var currentBucket = "";
        
        while (currentBucket.length <= n - splitPhrase[0].length) {
          currentBucket += splitPhrase.shift() + ' ';
          if (splitPhrase.length === 0){
            break;
          }
        }
        if (currentBucket[currentBucket.length - 1] === ' ') {
          var spaceless = '';
          for (var j = 0; j < currentBucket.length - 1; j++) {
            spaceless += currentBucket[j];
          }
          result.push(spaceless);
        } else {
          result.push(currentBucket);    
        } 
    }  
    return result;
}

// Julie's version:
function bucketize(phrase, n) {
  const result = [];
  const splitPhrase = phrase.split(' ');

  while (splitPhrase.length > 0) {
    let currentBucket = "";
    // shift the first word and store in a variable
    // it's important to shift no matter what
    // so that our splitPhrase gets shorter even if the word is too long
    // this prevents the while loop running forever if no words are bucketized
    const shifted = splitPhrase.shift();
     // add the word to the bucket IF it's short enough
    if (shifted.length <= n) {
      currentBucket += shifted
    }
    // if there are more words to add
    while (currentBucket.length <= n && splitPhrase.length !== 0) {
      // if there is space for the next word AND the space
      if (currentBucket.length <= n - (splitPhrase[0].length + 1)) {
        // add a space to separate the words
        currentBucket += ' ';
        currentBucket += splitPhrase.shift();
      } else {
        break;
      }
    }
    // if the currentBucket is NOT an empty string add to the result
    if (currentBucket.length) {
      result.push(currentBucket);
    }
  }  
  return result;
}

console.log(bucketize("she sells sea shells by the sea", 10)); //➞ ["she sells", "sea shells", "by the sea"]

console.log(bucketize("the mouse jumped over the cheese", 7)); //➞ ["the", "mouse", "jumped", "over", "the", "cheese"]

console.log(bucketize("fairy dust coated the air", 20)); //➞ ["fairy dust coated", "the air"]

console.log(bucketize("a b c d e", 2)); //➞ ["a", "b", "c", "d", "e"]
console.log(bucketize('these are all too long', 1))
