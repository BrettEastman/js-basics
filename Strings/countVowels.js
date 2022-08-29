// Create a function that takes a string and returns the number (count) of vowels contained within it.
// a, e, i, o, u are considered vowels (not y).
// All test cases are one word and only contain letters.

// my solution:
function countVowels(str) {
    var vowelCount = 0;
    var vowelArr = ['a', 'e', 'i', 'o', 'u'];
    str = str.split('');
    for (var i = 0; i < str.length; i++) {
        if (vowelArr.indexOf(str[i]) > -1) {
            vowelCount++
        }
    }
	return vowelCount;
}

// other better solutions:
function countVowels(str) {
    return str.match(/[aeiou]/g).length;
}

function countVowels(str) {
    return str.split('').filter(x => 'aeiouAEIOU'.includes(x)).length;
}

console.log(countVowels("Celebration")); // ➞ 5

console.log(countVowels("Palm")); // ➞ 1

console.log(countVowels("Prediction")); // ➞ 4