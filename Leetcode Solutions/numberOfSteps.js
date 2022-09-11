// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

var numberOfSteps = function(num) {
  // create number of steps var
  var numOfSteps = 0;
  // use while loop
  while (num > 0) {
    // check to see if even
    if (num % 2 === 0) {
      // if so, divide in half
      num /= 2;
      // increment steps
      numOfSteps++;
    } else {
    // otherwise
      // decrement by 1
      num -= 1;
      // increment steps
      numOfSteps++;
    }
  }
  // return num of steps
  return numOfSteps;  
};

// tests
// Example 1:

console.log(numberOfSteps(14));
//Expected output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:

console.log(numberOfSteps(8));
//Expected output: 4
// Explanation: 
// Step 1) 8 is even; divide by 2 and obtain 4. 
// Step 2) 4 is even; divide by 2 and obtain 2. 
// Step 3) 2 is even; divide by 2 and obtain 1. 
// Step 4) 1 is odd; subtract 1 and obtain 0.
// Example 3:

console.log(numberOfSteps(123));
//Expected output: 12