//Given a number, "isOddWithoutModulo" returns whether the passed in number is odd. It does so without using the modulo operator (%). It should work for negative numbers and zero.

// my version from July 2022:
function isOddWithoutModulo(num) {
  var isOdd = true;
  if (num === 0) {
      isOdd = false;
  }
  var numAbs = Math.abs(num);
  while (numAbs > -1) {
      numAbs -= 2;
      if (numAbs === 0) {
          isOdd = false;
      }
  }
  return isOdd;
}

//MY VERSION from May 2022:
function isOddWithoutModulo(num) {
  if(num === 0) {
    return false;
  }
  num = Math.abs(num);
  odd = true;

  while(num > 0) {
    num -= 2;
    if(num === 0) {
      odd = false;
    }
  }
  return odd;
}

var output = isOddWithoutModulo(17);
console.log(output); // --> true



//My version for 'isEven':

function isEvenWithoutModulo(num) {
  if(num === 0) {
    return true;
  }
  num = Math.abs(num);
  var even = false;

  while(num > 0) {
    num -= 2;
    if(num === 0) {
      even = true;
    }
  }
  return even;
}

var output = isEvenWithoutModulo(8);
console.log(output); // --> true