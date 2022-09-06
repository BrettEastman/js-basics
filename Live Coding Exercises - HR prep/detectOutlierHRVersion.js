// HIS VERSION:

// FUNCTION:
function detectOutlierValue(stringOfNums) {
    var arrayOfStringNums = stringOfNums.split(" ");
    var odds = [];
    var evens = [];
    for (var i = 0; i < arrayOfStringNums.length; i++) {
      var currentNum = Number(arrayOfStringNums[i]);
      if (currentNum % 2 === 0) {
        evens.push({  //he is creating an "object literal" right here, which is the first time we have done this. He wants to show that you can do this. Seems like my version is just as good, but good to know this is possible.
          value: currentNum,
          index: i + 1
        })
      } else {
        odds.push({
          value: currentNum,
          index: i + 1
        })
      }
    }
    if (odds.length === 1) {
        return odds[0].index;
    } else {
        return evens[0].index;
    }
  }
  
  //ASSERTION FUNCTION:
  function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log('FAILED [${testName}] expected "${expected}" but got "${actual}"');
    }
  }
  
  // Test examples:
  var actual_1 = detectOutlierValue("2 4 7 8 10"); // => 3
  var expected_1 = 3
  assertEqual(actual_1, expected_1, 'should work with sole odd number')
  
  var actual_2 = detectOutlierValue("1 10 1 1");  //=> 2 
  var expected_2 = 2
  assertEqual(actual_2, expected_2, 'should work with sole even number')