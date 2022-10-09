// Example from Anthony Pecchillo lecture:

// Example input: [1, 2, [3, [[4]]], 5]
// Example output: [1, 2, 3, 4, 5]

// flatten using inner function:
var flatten = function(input) {
  var result = [];

  var innerFunction = function(array) {
    if (!Array.isArray(array)) {
      // return array:
      result.push(array);
      return;
    }

    array.forEach(function(item) {
      innerFunction(item);
    });

  };
  innerFunction(input);

  return result;
};

console.log(flatten([1, 2, [3, [[4]]], 5]));

// flatten using pure recursion:
var flattenR = function(input) {
  // Declare a rsult array
  var result = [];

  //If the input is not an array
  if (!Array.isArray(input)) {
    // BASECASE
  }

  // Iterate through the input array
  input.forEach(function(item) {
    // Invoke the recursive function (and propababbly STEP 5 accumulate the result)
    result = result.concat(flattenR(item));
  });
  return result;
}

console.log(flattenR([1, 2, [3, [[4]]], 5]));