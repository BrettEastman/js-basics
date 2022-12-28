//Who's The Oldest?

// Given an object containing the names and ages of a group of people, return the name of the oldest person.


// Notes
// All ages will be different.

function oldest(people) {
	var oldest;
	for (var key in people) {
		if (oldest === undefined) {
			oldest = key;
		}
		if (people[oldest] < people[key]) {
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