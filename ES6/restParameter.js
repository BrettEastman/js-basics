// The rest parameter syntax is a newer technique which allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

// Example: Create a function multiplyAll that takes an unknown number of integer arguments, multiplies them all together, and returns the result.

function multiplyAll(...args) { //could be an ellipsis and any name you want to give it. The rest parameter automatically converts the number of arguments into an array, no matter how many arguments you give it. In this case, it becomes an array called "args"
  let product = 1;
  for (let i = 0; i < args.length; i++) {
    product *= args[i];
  }
  return product;
}

console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375

// ** NOTE ** The old way to do this was to use the Arguments Object. It is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. But, it is not an array and you would have to convert it to an array in order to iterate through it.