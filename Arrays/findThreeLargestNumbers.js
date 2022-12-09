// Find Three Largest Numbersff

// Write a function that takes in a  array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array.
// The function should return duplicate integers if necessary; for example, i should return [10,10,12] for an input array of [10,5,9,10,12]

// My solution:
function findThreeLargestNumbers(array) {
  var result = [];
  var highest;
  var highInd;
  var currentArr = array.slice();

  while (result.length < 3) {
    highest = Math.max(...currentArr);
    highInd = currentArr.indexOf(highest)
    currentArr.splice(highInd, 1);
    result.unshift(highest);
  }
  return result;
}

var arr = [141,1,17,-7,-17,-27,18,541,8,7,7];
console.log(findThreeLargestNumbers(arr));