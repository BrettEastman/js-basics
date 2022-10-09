//Create a function that takes in a year and returns the correct century.
// All years will be between 1000 and 2010.
// The 11th century is between 1001 and 1100.
// The 18th century is between 1701-1800.

// my solution:
function century(year) {
    strYear = (year + 99).toString();
    if (year > 2000) {
        return strYear[0] + strYear[1] + "st century";
    } else {
        return strYear[0] + strYear[1] + "th century";
    } 
}

// better solution:
function century(year) {
	const century = Math.ceil(year / 100);
  return century !== 21 
		? `${century}th century` 
		: `${century}st century`;
}

console.log(century(1756)); //➞ "18th century"

console.log(century(1555)); //➞ "16th century"

century(1000) //➞ "10th century"

century(1001) //➞ "11th century"

century(2005) //➞ "21st century"