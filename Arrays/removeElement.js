//Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter. If all the elements match, it should return an empty array. If an empty array is passed in, it should return an empty array.

function removeElement(array, discarder) {
  if(array === [] || array === discarder) {
    return [];
  }
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    if(array[i] !== discarder) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]

//OR, there is a fancier way to do it with splice:

function removeElementSplice(array, discarder) {
  for(var i = 0; i < array.length; i++) {
    if(array[i] === discarder) {
      array.splice(i,1); //we splice the array at the current index and delete one value
      i--; //this is a decrementer because once we splice, we remove an index, this goes back to the previous index number we just deleted.
    }
  }
  return array;
}

var output = removeElementSplice([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]