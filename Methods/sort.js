// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the array. Note that the array is sorted in place, and no copy is made.

// example from Javascripttutorial.net:
let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort();
console.log(numbers);
// --> [ 0, 1, 10, 2, 20, 3, 30 ]

//In this example, the sort() method places 10 before 2 because the string “10” comes before “2” when doing a string comparison.

//To fix this, you need to pass a compare function to the sort() method. The sort() method will use the compare function to determine the orders of elements. Here is the proper syntax:

let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort(function(a , b) {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);
// --> [ 0,  1,  2, 3, 10, 20, 30 ]

// or you can use arrow function syntax:
let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);

// and the simplest way to use arrow function, since the array is numbers only:
let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort((a, b) => a - b);

console.log(numbers);


// MDN examples of "functionless" sort:
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

// If you include a compare function in the parens, it specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.


// Here is an example from the HR prep course using a compare function with sort:
function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

var palindromes = ['otto', 'aelea', 'yrekabakery', 'ulu'];

  // sort the list of palindromes by word length
palindromes.sort(sortAscendingByLength) //here's the part I have difficulty understanding. We are passing the compare function to sort. sortAscendingByLength is a higher order function so we don't 'call' it, we just list the name of the function because what it is looking for is the definition of the compare function.

  // console.log the largest item in the sorted list (the sorted palindrome list will have the longest item at the end, so we can use pop to get the last item in the array)
console.log(palindromes.pop());