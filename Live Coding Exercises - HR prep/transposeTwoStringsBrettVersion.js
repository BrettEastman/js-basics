// Instructions: You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

//input: array of 2 strings
//output: flatList of several strings(depending on length of original strings) separated by \n

// MY VERSION (which passed the test): I chose to brute-force it, transposing two strings of identical length, since the instructions didn't say not to. However, in the exam they may want me to show my javascript understanding better by acknowledging that the strings could be of differing lengths. His version of this problem takes that into account.

// Function:
function transposeTwoStrings(arrOfStrings) {
    var flatList = '';
    var string_1 = arrOfStrings[0];
    var string_2 = arrOfStrings[1];
    for (var i = 0; i < string_1.length; i++) {
      flatList += string_1[i] + ' ' + string_2[i] + '\n';
    }
    return flatList;
  }
  
  
  // Assertion function:
  function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + '] expected "' + expected + '" but got "' + actual + '"')
    }
  }
  
  
  // TESTS:
  var input1 = ['Hello','World']
  var output1 = 'H W\ne o\nl r\nl l\no d\n'
  var actual1 = transposeTwoStrings(input1)
  assertEqual(actual1, output1, 'should log passed to indicate strings match');
  
  var input2 = ['Yellow','Worlds']
  var output2 = 'Y W\ne o\nl r\nl l\no d\nw s\n'
  var actual2 = transposeTwoStrings(input2)
  assertEqual(actual2, output2, 'should log passed to indicate strings match');