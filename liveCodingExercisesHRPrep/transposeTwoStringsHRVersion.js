//You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// His version:

// Function:
function transposeTwoStrings(arrayInput) {
    //create alias for first and second strings
    var firstString = arrayInput[0];
    var secondString = arrayInput[1];
    //create alias for longer string
    var longerString;
    //determine longer string
    if (firstString >= secondString) {
      longerString = firstString;
    } else {
      longerString = secondString;
    }
  
    //create result string
    var transposedString = "";
  
    //iterate over length of the longer string
    for (var i = 0; i < longerString.length; i++) {
      //set first to first strings current letter name or space
      var firstCharacter = firstString[i] || " ";
      //same with second
      var secondCharacter = secondString[i] || " ";
      
      transposedString += firstCharacter + " " + secondCharacter + "\n";
    }
    return transposedString;
  }
  
  console.log(transposeTwoStrings(['Hello','World']));
  console.log('\n');
  console.log(transposeTwoStrings(['some','things']));
  console.log('\n');
  console.log(transposeTwoStrings(['things','some']));
  console.log('\n');
  // -->
  
  // H W
  // e o
  // l r
  // l l
  // o d
  
  
  
  // s t
  // o h
  // m i
  // e n
  //   g
  //   s
  
  
  
  // t s
  // h o
  // i m
  // n e
  // g  
  // s  
  