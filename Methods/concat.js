//.concat() method allows us to concatenate as many arrays as we would like. You can do multiple arguments to concatenate multiple arrays.

// The concat() method is used to merge two or more arrays. This method DOES NOT CHANGE the existing arrays, but instead returns a NEW ARRAY. So usually it is best to reassign the previous array to it or to create a new variable.

// MDN example:
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]


// HR prep-course example:
function joinThreeArrays(arr1, arr2, arr3) {
  return arr1.concat(arr2, arr3);
}

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]