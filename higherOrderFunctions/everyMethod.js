// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

//The Array.every() method considers all the elements of an array  and then further checks that whether all the elements of the array satisfy the given condition (passed by in user) or not that is provided by a method passed to it as the argument.

// mdn example #1:
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

//mdn example #2:
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

//geeks for geeks example:
function ispositive(element, index, array) {
  return element > 0;
}

console.log([11, 89, 23, 7, 98].every(ispositive)); 
// -> true


//if every were a standard function it could look like this:
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;

  for (var i = 0; i < array.length; i++) {
    if (callbackFunction(array[i]) === false) {
      doesEveryElementMatch = false;
      break;
    }    
  }
  return doesEveryElementMatch;
}