// Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed.

// Given a censored string and a string of the censored vowels, return the original uncensored string.

// The vowels are given in the correct order.
// The number of vowels will match the number of * characters in the censored string.

function uncensor(str, vowels) {
  // create strArr with split
  var strArr = str.split('');
  // creat vowelsArr with split
  var vowelsArr = vowels.split('');
  // iterate through strArr
  for (var i = 0; i < strArr.length; i++) {
    // if i === "*"
    if (strArr[i] === '*') {
      // replace with shift vowels arr
      strArr[i] = vowelsArr.shift();
    }
  }
  // return strArr rejoined
	return strArr.join('');
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo")); // ➞ "Where did my vowels go?"

console.log(uncensor("abcd", "")); // ➞ "abcd"

console.log(uncensor("*PP*RC*S*", "UEAE")); // ➞ "UPPERCASE"