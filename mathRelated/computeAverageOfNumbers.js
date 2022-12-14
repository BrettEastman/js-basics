//Given an array of numbers, "computeAverageOfNumbers" returns their average. If input array is empty, your function should return 0.

function computeAverageOfNumbers(array) {
  if (array.length === 0) {
      return 0;
  }
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
      sum += array[i];
  }
  return sum / array.length;
}


var input1 = [1,2,3,4,5];
var result1 = computeAverageOfNumbers(input1);
console.log('should log 3:', result1);

var input2 = [];
var result2 = computeAverageOfNumbers(input2);
console.log('should log 0:', result2);