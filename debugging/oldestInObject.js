//ORIGINAL function to debug:

// function oldest(people) {
// 	var oldest;
// 	for (var key in people) {
// 		if (oldest === undefined) { 
// 			oldest = key; 
// 		} else { 
// 			if ( people < people[key]) { 
// 				 oldest = key;
// 			}
// 		}
// 	}
// 	return oldest;
// }

function oldest(people) {
	var oldest;
	for (var key in people) {
    // the orignal declared variable "oldest" IS undefined, so this reassigns it to the first key it comes across in the for in loop (which is Emma in the first example)
		if (oldest === undefined) {
			oldest = key; 
    // now that oldest is Emma, this is like asking if the other key values are greater than the value of Emma
		} else if (people[oldest] < people[key]) {
		  oldest = key;
		}
	}
	return oldest;
}


var ex1 = {
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29
};  // ➞ "Emma"

var ex2 = {
  Max: 9,
  Josh: 13,
  Sam: 48,
  Anne: 33
} // ➞ "Sam"


// //////assertFunction
var assertOldest = function(actual, expected) {
  if(actual === expected) {
    return 'passed';
  } else {
    return 'failed';
  }
}

///////running the tests
console.log('assertOldest1: ', assertOldest(oldest({
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29,
}), 'Emma'));

console.log('assertOldest1: ', assertOldest(oldest({
  Max: 9,
  Josh: 13,
  Sam: 48,
  Anne: 33,
}), 'Sam'));