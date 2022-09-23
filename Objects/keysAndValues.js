// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order. Note: remember to sort the keys

// input: object

// output: arr of two arrs, one for keys, one for values


function keysAndValues(object) {
  //create resultArr
  var resultArr = [];
  //create valuesArr
  var valuesArr = [];
  //use object.keys to create an arr of the keys
  var sortedArr = Object.keys(object).sort();
  //sort the arr and push to resultArr
  resultArr.push(sortedArr);
  //now use for loop (with sortedArr) to access each value of the obj(now in sorted order)
  for(var i = 0; i < sortedArr.length; i++) {
    var currentKey = sortedArr[i];
    //push each value to valuesArr
    valuesArr.push(object[currentKey]);
  }
  //push valuesArr to resultArr
  resultArr.push(valuesArr);
    //return resultArr
  return resultArr;
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }))
//➞ [["a", "b", "c"], [1, 2, 3]]

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }))
//➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))
//➞ [["key1", "key2", "key3"], [true, false, undefined]]