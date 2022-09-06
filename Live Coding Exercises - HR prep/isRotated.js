// Instructions: Is one string a rotated version of another?

// Extra hint:
// If you double the string, you'll be able to find another string inside the doubled string using familiar String methods.

// Doubled string: 'hello worldhello world'
// Search w/in it: '       orldhello w    '

//Function:
function isRotated(string1, string2) {
    var doubled = string1 + string1;
    var result = false
    for (var i = 0; i < doubled.length; i++) {
      var currentSlice = doubled.slice(i, i + string1.length)
      if (currentSlice === string2) {
        console.log(currentSlice);
        result = true;
      }
    }
    return result;
  }
  
  //Another sleeker way to do it based on Julie's version. The method indexOf was the one I was trying to think of during the video, but came up with the slice idea first so went with that.
  function isRotated(string1, string2) {
    var doubled = string1 + string1;
    if (doubled.indexOf(string2) > -1) {
      return true;
    } else {
      return false;
    }
  }
  
  //Assertion functions:
  function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + '] expected ' + expected + ' but got ' + actual)
    }
  }
  
  //Tests:
  var string1 = 'hello world'
  var string2 = 'orldhello w'
  var actual1 = isRotated(string1, string2);
  var expected1 = true;
  assertEqual(actual1, expected1, 'should log true');
  
  var string3 = 'hellow world'
  var string4 = 'borldhello w'
  var actual2 = isRotated(string3, string4);
  var expected2 = false;
  assertEqual(actual2, expected2, 'should log false');
  