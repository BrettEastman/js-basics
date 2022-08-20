//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const array = [1, 2, 3, 4, 5];

// checks whether an element is even
// even variable is the name of the function, element is the parameter of the function, arrow indicates that it is a function that will return without having to write the word return
const even = (element) => element % 2 === 0;


console.log(array.some(even));
// expected output: true


// Different ways to write functions in JS
// anonymous function assigned to a variable with keyword function
var even1 = function(element) {
  return element % 2 === 0;
}
// named function
function even2(element) {
  return element % 2 === 0;
}
// arrow function v1
var even3 = (element) => element % 2 === 0;
// don't need the parens around the parameter
var even4 = element => element % 2 === 0;
// need parens around params if none
var something = () => console.log('hi')
// arrow function with a return
var even5 = (element) => {
  return element % 2 === 0; 
}


  
// Julie messing around example:

['somethingelse', 'lasdfisdfsdce', 'lace', 'not', 'something'].some(function(word, index) {
    return word.includes('lace')
});
