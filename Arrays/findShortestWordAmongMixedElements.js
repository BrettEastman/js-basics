//Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array. If there are ties, it should return the first element to appear in the given array. Expect the given array to have values other than strings. If the given array is empty, it should return an empty string. If the given array contains no strings, it should return an empty string.

function findShortestWordAmongMixedElements(arr) {
  if(arr.length === 0) {
    return '';
  }
  var stringsArr = [];

  for(var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'string') {
      stringsArr.push(arr[i]);
    }
  }
  if(stringsArr.length === 0) {
    return '';
  }
  var shortest = stringsArr[0];

  for(var j = 1; j < stringsArr.length; j++) {
    if(stringsArr[j].length < shortest.length) {
      shortest = stringsArr[j];
    }
  }
  return shortest;
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'