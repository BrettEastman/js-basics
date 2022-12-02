// Different ways to write functions in JS, per Julie and Geeks for Geeks:

// FUNCTION DECLARATION (Good because it can work anywhere in the code)
// Example #1:
function even1(element) {
  return element % 2 === 0;
}
// Calling the function
even1(8);

// Example #2:
function add(a, b) {
  console.log(a + b);
}
add(2, 3);


// FUNCTION EXPRESSION - anonymous function assigned to a variable with keyword function.  Here we define a function using a variable and store the returned value in that variable.
// Example #1:
var even2 = function(element) {
  return element % 2 === 0;
}
result = even2(7);
console.log(result);
// --> should be false

// Example #2:
const add = function(a, b) {
    console.log(a+b);
}
add(2, 3);

// Example #3:
var assigned = function(param) {
  console.log(param);
}
assigned('hello anonymous world');

// Example #4:
var assignedName = function namedFunction(param) {
  console.log(param);
}

assignedName('hello named world');


// ARROW FUNCTIONS version 1 - single line of code
// "even" variable is the name of the function, element is the parameter of the function, arrow indicates that it is a function that will return without having to write the word return

// Example #1:
var even3 = (element) => element % 2 === 0;
result = even3(7);
console.log(result);
// --> should be false

// don't need the parens around the parameter
var even4 = element => element % 2 === 0;
result = even4(8);
console.log(result);
// --> should be true

// but, need parens around params if none
var something = () => console.log('hi')

// Example #2:
let add = (a, b) => a + b;
console.log(add(3, 2));

// Example # - multiple lines of code
var great = (a, b) => {
    if (a > b)
        return "a is greater";
    else
        return "b is greater";
}
console.log(great(3,5));


// ARROW FUNCTION WITH RETURN
var even5 = (element) => {
  return element % 2 === 0;
}