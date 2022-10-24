//Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2. Notes: Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation; 0 % ANYNUMBER = 0; ANYNUMBER % 0 = NaN; If either operand is NaN, then the result is NaN; Modulo always returns the sign of the first number, even if the remainder is 0.

function modulo(num1, num2) {
  if(num1 === 0) {
    return 0;
  }
  if(num2 === 0 || isNaN(num1) || isNaN(num2)) {
    return NaN;
  }
  //create a resultIsPositive boolean flag
  var resultIsPositive = true;
  if(num1 < 0) {
    resultIsPositive = false;
  }
  //make positive versions of both numbers
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  //reassign num1 to be num1 - num2 until num1 is less than num2
  while(num1 >= num2) {
    num1 = num1 - num2 //same as saying num1 -= num2
  }
  //check if result is positive
    //if it is, then just return num1
  if(resultIsPositive) {
    return num1;
  //otherwise
    //return -num1
  } else {
    return -num1;
  }
}


var output = modulo(25, 4);
console.log(output); // --> 1
