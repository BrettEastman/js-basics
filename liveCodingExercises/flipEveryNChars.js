//Instructions:

// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

//FUNCTION
function flipEveryNChars(input, n) {
    var resultString = '';
    var characters = input.split('');
    for (var i = 0; i < characters.length; i+=n) {
      var slice5 = characters.slice(i, i + n);
      var reversed = slice5.reverse();
      var reversedString = reversed.join('');
      resultString += reversedString;    
    }
    return resultString;
  }
  
  //ASSERTION FUNCTION
  function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log(`FAILED [${testName}] expected "${expected}" but got "${actual}"`);
    }
  }
  
  //TEST
  var input1 = 'a short example';
  var output1 = flipEveryNChars(input1, 5);
  var expected1 = 'ohs axe trelpma'
  assertEqual(output1, expected1, 'should log passed to indicate strings 5 chars long match')
  
  var input2 = '123456789';
  var output2 = flipEveryNChars(input2, 3);
  var expected2 = '321654987'
  assertEqual(output2, expected2, 'should log passed to indicate strings 3 chars long match')