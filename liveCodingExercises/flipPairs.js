//Flip every pair of characters in a string.

//MY VERSION (after having a little help from Julie)
function flipPairs(input) {
    var resultString = '';
    for (var i = 0; i < input.length; i += 2) {
      if (input[i + 1] === undefined) {
        resultString += input[i];
        return resultString;
      } else {
        resultString += input[i + 1];
        resultString += input[i];
      }   
    }
    return resultString;
  }
  
  //HIS VERSION:
  function flipPairs(input) {
    var resultString = '';
    for (var i = 0; i < input.length; i += 2) {
      if (input[i + 1] === undefined) {
        resultString += input[i];
        break;
      }
      resultString += input[i + 1];
      resultString += input[i];   
    }
    return resultString;
  }
  
  //Assertion functions:
  function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + '] expected "' + expected + '" but we got "' + actual + '"');
    }
  }
  
  //Test:
  
  var input1 = 'check out how interesting this problem is, it\'s insanely interesting!';
  var output1 = flipPairs(input1);
  var expected1 = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!"
  
  assertEqual(output1, expected1, 'should log passed to indicate both strings are the same')
  
  //console.log(output1); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!