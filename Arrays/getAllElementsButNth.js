//Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth. There are two ways to do it:

//1st way:
function getAllElementsButNth(array, n) {
  var result = [];
  for(var i = 0; i < array.length; i++) {
    if(i === n) {
      continue;
    }
    result.push(array[i]);
  }
  return result;
}

//2nd way:
function getAllElementsButNthSplice(array, n) {
  array.splice(n, 1); //this will start the splice at 'n' and cut 1 element
  return array;
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']

var output = getAllElementsButNthSplice(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']