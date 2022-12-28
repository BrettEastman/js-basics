//Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array. If keys are present in the given array, but are not in the given object, it should ignore them. It does not modify the passed in object.

function select(arr, obj) {
  var newObj = {};
  //if arr[i] is in obj, then add obj[array[i]] to newObj
  for(var i = 0; i < arr.length; i++) {
    var currentArrayElement = arr[i]
    if(obj[currentArrayElement] !== undefined) {
      newObj[currentArrayElement] = obj[currentArrayElement]
    }
  }
  return newObj;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }