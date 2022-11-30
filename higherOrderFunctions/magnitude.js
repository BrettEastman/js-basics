// You will be implementing a basic case of the map-reduce pattern in programming. Use the built in JavaScript array functions .map() and .reduce() to solve the following problem.

// Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function Math.hypot()). Use the standard distance formula for n-dimensional Cartesian coordinates.

// Notes
// The array can have any length.
// The input array will contain integers (except for empty array [] ➞ 0).
// Use both .map() and .reduce().
// Don't use Math.hypot().

// My first solution:
var magnitude = function(vector) {
  if (vector.length === 0) {
    return 0;
  }
  result = vector.map(function(item) {
    return item **2;
  }).reduce(function(acc, item) {
    return acc + item;
  });
  return Math.sqrt(result);
}

// My ideal version based on one below:
let magnitude = vector =>
    Math.sqrt(
        vector.map(num => num **2)
         .reduce((acc, num) => acc + num, 0));

// top solutions in Edabit:
// let magnitude = v =>
//     Math.sqrt(
//         v.map(x => x * x)
//          .reduce((x, y) => x + y, 0));

// var magnitude = vector => {
//   return Math.sqrt(vector
//       .map(num => Math.pow(num, 2))
//       .reduce((acc, num) => acc + num, 0)
//   );
// }


// Examples:
console.log(magnitude([3, 4])) // ➞ 5

console.log(magnitude([0, 0, -10])) // ➞ 10

console.log(magnitude([])) // ➞ 0

console.log(magnitude([2, 3, 6, 1, 8] )) // ➞ 10.677078252031311