// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
// Input is a string 
// The output is a number - the index of the outlier in the array, which should be 1-indexed, not 0-indexed.

//MY VERSION OF THE FUNCTION(which passed the test):
function detectOutlierValue(string) {
    //create array of numbers, space delimited
    var stringArr = string.split(' ');
    //convert array of string nums in to numsArr
    var numsArr = [];
    for (i = 0; i < stringArr.length; i++) {
      numsArr.push(Number.parseInt(stringArr[i]));
    }
    // console.log(numsArr);
    // create empty arrays for odd and even
    var evenArr = [];
    var oddArr = [];
    //iterate over the numsArr
    for (j = 0; j < numsArr.length; j++) {
       //if odd, push to oddArr, else to evenArr
      if (numsArr[j] % 2 === 0) {
        evenArr.push(numsArr[j]);
      } else {
        oddArr.push(numsArr[j]);
      }
    }
    //create soleNum variable
    var soleNum = 0
    //if evenArr.length === 1, then push num to soleNum
    if (oddArr.length === 1) {
      soleNum = oddArr[0];
    } else {
      soleNum = evenArr[0];
    }
    //iterate through numsArr, if i equals soleNum, then return i +1
    for (var k = 0; k < numsArr.length; k++) {
      if (numsArr[k] === soleNum) {
        return k + 1;
      }
    }
  }
  
  
  //ASSERTION FUNCTION:
  function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + '] expected "' + expected + '" but got "' + actual + '"')
    }
  }
  
  // Test examples:
  
  var expected1 = 3
  var actual1 = detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
  assertEqual(actual1, expected1, 'should log 3 to indicated 1-indexed index number of sole odd')
  
  var expected2 = 2
  var actual2 = detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
  assertEqual(actual1, expected1, 'should log 2 to indicated 1-indexed index number of sole even')
  