// .substring() method extracts part of a string:
// **NOTE: A similar method called .substr() is a deprecated method which may be dropped at any time. Avoid using it

var stringLace = 'laced';
stringLace = stringLace.substring(0, 4);
console.log('string starting at index 0 then going up to but not including 4:', stringLace);
// --> lace


// Function example:
function applySubString(string, start, end) {
  var res = string.substring(start, end);
	return res;
}

var DNAStrand = "ATGCGCTAACATCGCAGCTAGTTAAGCGATTGCAT";

console.log(applySubString(DNAStrand, 6, 25));
// --> TAACATCGCAGCTAGTTAA

// Example - use it to copy an entire string (then add a "Q" in this case):
console.log("ATGCGCTAACATCGCAGCTAGTTAAGCGATTGCAT".substring() + "Q");
// --> ATGCGCTAACATCGCAGCTAGTTAAGCGATTGCATQ