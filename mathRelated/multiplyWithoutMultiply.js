//Given 2 numbers, "multiply" returns their product. It should not use the multiply operator - *

//MY VERSION:
function multiply(num1, num2) {
  if (num1 === 0 || num2 === 0) {
      return 0;
  }
  var num1Abs = Math.abs(num1);
  var num2Abs = Math.abs(num2);
  var prod = num1Abs;
  for (var i = 1; i < num2Abs; i++) {
      prod += num1Abs;
  }
  if (num1 > 0 && num2 > 0 || num1 < 0 && num2 < 0) {
      return prod;
  } else {
      return -prod;
  }
}

var output = multiply(-4, -7);
console.log(output); // --> 28



//HIS VERSION:
function multiply(num1, num2) {
  var resultIsPositive = true;
  if(num1 > 0 && num2 < 0 || num2 > 0 && num1 < 0) {
    resultIsPositive = false;
  }
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  var result = 0;
  for(var i = 0; i < num2; i++) {
    result += num1;
  }

  if(resultIsPositive) {
    return result;
  } else {
    return -result;
  }
}