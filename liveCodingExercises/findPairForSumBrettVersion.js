// Instructions; Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// MY VERSION: which was correct, but it could have been better. Mine doesn't account for repeated counting of the index number.

// Function:
function findPairForSum(array, number) {
    //create variable for pair array (empty)
    var pairArr = [];
    // iterate over the input array
    for (var i = 0; i < array.length; i++) {
      // create variable for current index (currentNum)
      var currentNum = array[i];
      var aliasArr = array;
      //if currentNum plus each index which is not current num, check to see if sum is the number, and if so, add currentNum and other num to pairArr
      for (var j = 0; j < aliasArr.length; j++) {
        if (currentNum + aliasArr[j] === number) {
          pairArr.push(currentNum, aliasArr[j]);
          return pairArr;
        }
      }
    }          
    // return the pairArr 
  }
  
  // ASSERTION FUNCTION:
  
  // TESTS:
  var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
  console.log(pair); // --> [4, 5]