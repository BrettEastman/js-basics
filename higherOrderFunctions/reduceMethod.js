// reduce is a method that loops over an array and takes a callback function with four parameters: accumulator(your answer), element, index, array
// mdn refers to the four parameters as: (previousValue, currentValue, currentIndex, array)

//here is an example to show what everything looks like:
function squareSum(numbers) {
    return numbers.reduce(function(squareSum, number, index, numArray) {
      console.log('squareSum', squareSum)
      console.log('number', number)
      console.log('index', index)
      console.log('numArray', numArray)
      console.log('----- next loop ------')
    }, 0) // 0 is the starting value
  }
  
  console.log(squareSum([46, 687, -3, 1000, 5]));
  console.log(squareSum([1, 2, 3, 4]));
  /*
  squareSum 0
  number 46
  index 0
  numArray [ 46, 687, -3, 1000, 5 ]
  ----- next loop ------
  squareSum undefined
  number 687
  index 1
  numArray [ 46, 687, -3, 1000, 5 ]
  ----- next loop ------
  squareSum undefined
  number -3
  index 2
  numArray [ 46, 687, -3, 1000, 5 ]
  ----- next loop ------
  squareSum undefined
  number 1000
  index 3
  numArray [ 46, 687, -3, 1000, 5 ]
  ----- next loop ------
  squareSum undefined
  number 5
  index 4
  numArray [ 46, 687, -3, 1000, 5 ]
  ----- next loop ------
  undefined
  squareSum 0
  number 1
  index 0
  numArray [ 1, 2, 3, 4 ]
  ----- next loop ------
  squareSum undefined
  number 2
  index 1
  numArray [ 1, 2, 3, 4 ]
  ----- next loop ------
  squareSum undefined
  number 3
  index 2
  numArray [ 1, 2, 3, 4 ]
  ----- next loop ------
  squareSum undefined
  number 4
  index 3
  numArray [ 1, 2, 3, 4 ]
  ----- next loop ------
  */
  
  
  // and here is an actual example using reduce to make a sum of the square root of each item in the array:
  function squareSum(numbers) {
    return numbers.reduce(function(squareSum, number, index, numArray) {
      return squareSum += number ** 2; //inner return returns the new squareSum back to the reduce loop. The outer return returns the final result.
    }, 0)
  }
  
  //note that we only used squareSum and number, so we didn't use index or numArray. Should be written like this:
  function squareSum(numbers) {
    return numbers.reduce(function(squareSum, number) {
      return squareSum += number ** 2;
    }, 0)
  }
  
  // cleaner arrow function version!
  function squareSum(numbers) {
    return numbers.reduce((squareSum, number) =>  squareSum += number ** 2, 0)
  }
  
  console.log(squareSum([46, 687, -3, 1000, 5])); // --> 1474119
  console.log(squareSum([1, 2, 3, 4])); // --> 30
  
  
  // The reduce() method is used in an array to return a single value from an array after executing the user-supplied callback function on each element of the array. It transverses from the left-most-element to the right-most-element of the given array.
  
  //It can be called using two ways.
  
  // #1 - CALLBACK FUNCTION: The function will be declared first and later called for execution on an array. Syntax:
  
  array.reduce(myFunction, initialValue)
  
  // mdn example:
  const array1 = [1, 2, 3, 4]; // 0 + 1 + 2 + 3 + 4
  const initialValue = 0;
  const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  
  console.log(sumWithInitial);
  // expected output: 10
  
  // freecodecamp example:
  var total = [0, 1, 2, 3].reduce(function(a, b) {
    return a + b;
  });
  // total == 6
  
  var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
  }, []);
  // flattened is [0, 1, 2, 3, 4, 5]
  
  
  // #2 - INLINE CALLBACK FUNCTION: The parameters are passed inside the function inside reduce() method along with the array that is to be executed. Syntax:
  
  reduce(function(returnValue, currentValue, currentIndex, array) { /* … */}, initialValue)
  
  