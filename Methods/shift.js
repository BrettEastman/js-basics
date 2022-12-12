//The shift method will remove the element from the front of an array and return that first element only. But the original array still exists, just without the first element.
var lettersArr = ['A', 'B', 'C'];
console.log(lettersArr.shift());
// --> A

//So again, shift will return only the first element, but if you return the array, it will contain all but the first element.
console.log(lettersArr);
// --> ['B', 'C']

console.log([4, 5, 6].shift());
// --> 4

// Example of use in a function:
function removeFromFront(arr) {
  arr.shift(); //if we did return arr.shift(), only the number 1 would print to the console
  return arr; //but since we are actually returning arr, just [2,3] will print to the console
}

var output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]