// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  var sourceKeys = Object.keys(source);
  // console.log(sourceKeys);
  for (var i = 0; i < collection.length; i++) {
    var currentObj = collection[i];
    var hasKeyVal = false;
    for (var j = 0; j < sourceKeys.length; j++) {
      var currentVal = currentObj[sourceKeys[j]]
      console.log(currentVal)
      if (currentVal !== undefined && currentVal === source[sourceKeys[j]]) {
        hasKeyVal = true;
      } else {
        hasKeyVal = false;
        break;
      }
    }
    if (hasKeyVal) {
      arr.push(currentObj);
    } 
  }
  console.log(arr)

  // Only change code above this line
  return arr;
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]