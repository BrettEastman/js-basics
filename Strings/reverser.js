// The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.
// There will be no punctuation in any of the test cases.

function reverse(str) {
	// create var with str split into arr
    strArr = str.split('');
    // create reversedArr var, having reversed the elements with .reverse
    var reversedArr = strArr.reverse();
    // iterate over the reversedArr
    for (var i = 0; i < reversedArr.length; i++) {
      // if char is upper case, make it lower
      if (reversedArr[i] === reversedArr[i].toUpperCase()) {
        reversedArr[i] = reversedArr[i].toLowerCase();
      } else {
      // else if char is lower, make it upper
        reversedArr[i] = reversedArr[i].toUpperCase();
      }
    }
    // join arr back into string and return it
    return reversedArr.join('');
}

console.log(reverse("Hello World")); //➞ "DLROw OLLEh"

console.log(reverse("ReVeRsE")); //➞ "eSrEvEr"

console.log(reverse("Radar")); //➞ "RADAr"