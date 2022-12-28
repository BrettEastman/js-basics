//Write a function 'transformArrayToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

// my version from July 2022:
function transformArrayToObject(array) {
  var arrObj = {};
  for (var i = 0; i < array.length; i++) {
      arrObj[array[i][0]] = array[i][1];
  }
  return arrObj;
}

// my version from May 2022:
function transformArrayToObject(array) {
  var newObj = {};

  for(i=0;i<array.length;i++) {
    var key = array[i][0];
    var value = array[i][1];
    newObj[key] = value;
  }
  return newObj;
}

var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

var output = transformArrayToObject(array);
console.log(output);