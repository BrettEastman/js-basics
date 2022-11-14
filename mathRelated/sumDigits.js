//Given a number, "sumDigits" returns the sum of all its digits. If the number is negative, the first digit should count as negative.

function sumDigits(num) {
  //first, if negative number, we need to get rid of the negative and save that information for later.
var isNegative = false;
if (num < 0) {
    num = Math.abs(num);
    isNegative = true;
}
 //then we start the main part where we turn the number into a string and add up the individual numbers
var stringNum = num.toString();
var sum = 0;
for (var i = 0; i < stringNum.length; i++) {
    sum += Number(stringNum[i]);
}
  //but then we refer back to whether or not it was a negative number. If so, we then take away the first number twice (since we already added it, we need to take away again).
if (isNegative) {
    return sum - (Number(stringNum[0]) * 2);
} else {
    return sum;
}
}


//Then, we have our test cases. Again, if the number is negative, the first digit should count as negative:

var output = sumDigits(1148);
console.log(output); // --> 14

var output = sumDigits(-316);
console.log(output); // --> 4