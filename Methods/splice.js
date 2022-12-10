//.splice() method is incredibly robust and can be used for lots of things. It is a destructive method. For example, in array.splice(2, 0, 3); The first argument “2” is the index where we want to perform the splice. The second argument refers to how many elements we want to delete (in this case it’s “0” because we don’t want to delete anything). The third argument (also 4th, 5th, 6th, etc) are elements we want to add. So, if want to use .splice to add something, the middle argument will always be zero. If we are using splice to remove an element, we only need the first two arguments: you just need to say the index, then how many elements to delete.

/*
SYNTAX:
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
*/

// basic example:
var arr = [141,1,17,-7,-17,-27,18,541,8,7,7];

// note that you DO NOT need to write arr = arr.splice(4, 1). It cuts it out of the arr straight away.
console.log(arr.splice(4, 1)); // [-17]

// this is the array post-splice
console.log(arr); // [141, 1, 17, -7, -27, 18, 541, 8, 7, 7]

// and here we have cut out another element at index 4
console.log(arr.splice(4, 1)); // [-27]

// this is the array after the second splice
console.log(arr); // [141, 1, 17, -7, 18, 541, 8, 7, 7]


// prep course examples:
function spliceThreeChars(string, index, character) {
  var strArr = string.split('');
  character = character + character + character;
  strArr.splice(index, 0, character);
  var strArrString = strArr.join('');
  return strArrString;
}

console.log(spliceThreeChars("Going to  tomorrow.", 9, 'A'));
console.log(spliceThreeChars("Great num is  because it has itself of itself.", 13, "3"));

function deleteThreeChars(string, index) {
  var strArr = string.split('');
  strArr.splice(index, 3);
  var strArrString = strArr.join('');
  return strArrString;
}

console.log(deleteThreeChars("Going to  tomorrow.", 9, 'A'));
console.log(deleteThreeChars("Great num is  because it has itself of itself.", 13, "3"));
// --> Going to morrow.
//     Great num is cause it has itself of itself.


// For an example with removing and adding, here we are starting at index 3, then cutting 2 elements, then adding in “4, 5”:

var array = [1, 2, 3, 'mistake1', 'mistake2', 6];
array.splice(3, 2, 4, 5);
console.log('array with elements spliced:', array);
// --> array with elements spliced: [ 1, 2, 3, 4, 5, 6 ]



//Example of using splice to add an element to an array:
function addAnElementInGeneral(array, index, element) {
  // add the element to the array at the index given
  // (be sure not to replace any existing elements)
  array.splice(index, 0, element);
  // return the array
  return array;
}

var resultArray1 = addAnElementInGeneral([7, 9, 10], 1, 8);
console.log('should log [7, 8 , 9, 10]:', resultArray1);

var resultArray2 = addAnElementInGeneral(['q', 'r', 't'], 2, 's');
console.log('should log ["q", "r", "s", "t"]:', resultArray2);


//Example of using splice to remove an element to an array:
function removeAnElementInGeneral(array, index) {
  // remove the element from the array at the index given
  array.splice(index, 1);
  // return the array
  return array;
}

var resultArray1 = removeAnElementInGeneral([8, 9, 10, 'bad entry', 11], 3);
console.log('should log [8, 9, 10, 11]:', resultArray1);

var resultArray2 = removeAnElementInGeneral(['one', 'two', 452, 'three'], 2);
console.log('should log ["one", "two", "three"]:', resultArray2);


//Example of using splice to remove two elements and add two elements to an array:
function applySplice(array, index, item1, item2) {
  // remove two elements from the array at the index given, and adds item1 and item2 in their place
  array.splice(index, 2, item1,item2);
  // return the array
  return array;
}

var resultArray1 = applySplice([8, 9, 10, 'bad entry1', 'bad entry2', 13], 3, 11, 12);
console.log('should log [8, 9, 10, 11, 12, 13]:', resultArray1);

var resultArray2 = applySplice(['one', 'two', 452, 672, 'five'], 2, 'three', 'four');
console.log('should log ["one", "two", "three", "four", "five"]:', resultArray2);