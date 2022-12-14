// The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

// mdn example:
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"


// example I made based on a diagnostic question:
var inputString = 'dog';

function solution(string) {
    var charCodes = [];
    for (var i = 0; i < string.length; i++) {
        var currentCode = string.charCodeAt(i);
        charCodes.push(currentCode);
    }
    return charCodes;
}

console.log(solution(inputString)); //[ 100, 111, 103 ]