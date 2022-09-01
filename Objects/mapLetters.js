// Given a word, create an object that stores the indexes of each letter in an array. All strings given will be lowercase.

// Make sure the letters are the keys.
// Make sure the letters are symbols.
// Make sure the indexes are stored in an array and those arrays are values.

function mapLetters(word) {
	// create obj var
    var resultObj = {};
    // split word into an array
    wordArr = word.split('');
    // iterate over the array
    for (var i = 0; i < wordArr.length; i++) {
        // if the unique element is undefined as a key in the object
        if (resultObj[wordArr[i]] === undefined) {
            // then add the key with an array with the index number as it's value
            resultObj[wordArr[i]] = [i];
        } else {
            // otherwise, just push the next index number in there
            resultObj[wordArr[i]].push(i)
        }
    }      
    // return the obj
    return resultObj;
}

console.log(mapLetters("dodo")); //➞ { d: [0, 2], o: [1, 3] }

console.log(mapLetters("froggy")); //➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

console.log(mapLetters("grapes")); //➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }