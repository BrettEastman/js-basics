// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
// All of the letters in the input list will always be lowercase.

function mapping (array) {
    var obj = {};
    for (var i = 0; i < array.length; i++) {
        obj[array[i]] = array[i].toUpperCase();
    }
    return obj;
}

console.log(mapping(["p", "s"])); //➞ { "p": "P", "s": "S" }

console.log(mapping(["a", "b", "c"])); //➞ { "a": "A", "b": "B", "c": "C" }

console.log(mapping(["a", "v", "y", "z"])); //➞ { "a": "A", "v": "V", "y": "Y", "z": "Z"