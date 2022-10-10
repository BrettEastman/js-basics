// My more recursive version:
var arraySum = function(array) {
  // base case:
  if (array.length === 0) {
    return 0;
  }
  if (!Array.isArray(array[0])) {
    return array[0] + arraySum(array.slice(1));
  } else {
    return arraySum(array[0]) + arraySum(array.slice(1));
  }
};

// Julie's version using for loop:
var arraySumWithLoop = function(array) {
  var sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += arraySumWithLoop(array[i]);
    } else {
      sum += array[i];
    }
  }
  return sum;
}

arraySumWithLoop([1, -2, [3, [4]], 5])