// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

// A string with a single character is trivially counted as a string with repeating identical characters.
// If there are no strings with repeating identical characters, return an empty array (see example #3).

// my solution:
function identicalFilter(arr) {
    // create result arr
    var result = [];
    // need to iterate through the arr to check each string
    for (var i = 0; i < arr.length; i++) {
        var currentString = arr[i];
        var firstChar = currentString[0];
        var identical = true;
        for (var j = 1; j < currentString.length; j++) {  
            if (currentString.length === 1) {
                result.push(currentString);
                break;
            }         
            if (currentString[j] !== firstChar) {
                identical = false;
                break;
            }
        }
        if (identical) {
            result.push(currentString);
        }
    }
    return result;
}

//better solution:
function identicalFilter(arr){
    return arr.filter((str) => new Set(str).size === 1)
}

console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]));
//➞ ["aaaaaa", "d", "eeee"]

console.log(identicalFilter(["88", "999", "22", "545", "133"])); 
//➞ ["88", "999", "22"]

console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])); 
//➞ []