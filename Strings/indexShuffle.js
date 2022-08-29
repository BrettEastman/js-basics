// Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together. 0 should be treated as an even number.

// my solution:
function indexShuffle(str) {
    var evenInd = "";
    var oddInd = "";
    for (var i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenInd += str[i];
        } else {
            oddInd += str[i];
        }
    }
	return evenInd + oddInd;
}

// better solution:
function indexShuffle(str) {
	const even = [...str].filter((char, i) => i % 2 === 0);
	const odd = [...str].filter((char, i) => i % 2);
	
	return [...even, ...odd].join('');
}

console.log(indexShuffle("abcd")); //➞ "acbd"
// "ac" (even-indexed) + "bd" (odd-indexed)

console.log(indexShuffle("abcdefg")); //➞ "acegbdf"

console.log(indexShuffle("holiday")); //➞ "hldyoia"

console.log(indexShuffle("maybe")); //➞ "myeab"