// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. It is similar to "for in" in Python

// Codesmith example:
function holidays(arr) {
  // Do not use a variable to store your result
  if (arr.indexOf("October") > - 1) {
    return "Happy Halloween";
  } else {
    return "Have a great day!";
  }
}

const months = ["April", "May", "June", "October"];
const animals = ["Cats", "Dogs", "Pigs"];
console.log(holidays(months)); // should return: "Happy Halloween"
console.log(holidays(animals)); // should return: "Have a great day!"



// But, it can also be used to find the index in a string. It can be a great tool for finding a substring within a larger string.
var DNAStrand = "ATGCGCTAACATCGCAGCTAGTTAAGCGATTGCAT";
var stopCodon = "TAA";
var indexOfFirstStopCodon = DNAStrand.indexOf(stopCodon);
var indexOfSecondStopCodon = DNAStrand.indexOf(stopCodon, indexOfFirstStopCodon + 1) // the first argument tells it what to look for and the 2nd argument tells it where to start looking.

console.log('index where first stopCodon is found with gene sequence:', indexOfFirstStopCodon);
// -> index where first stopCodon is found with gene sequence: 6

console.log('index where second stopCodon is found with gene sequence:', indexOfSecondStopCodon);
// -> index where second stopCodon is found with gene sequence: 22



//2nd example:
function applyIndexOf(string, subString) {
  // create an index variable
  // assign it to the index inside of string where subString can first be found
  var index = string.indexOf(subString);
  // return the index variable
  return index;
}

var string1 = 'Quicksort';
var subString1 = 'sort';
var resultIndex1 = applyIndexOf(string1, subString1);
console.log('should log 5:', resultIndex1);


// previous example:
var ingredientsList = ['flour', 'sugar', 'eggs'];
// change to ingredient not in list to see 'else' condition
var ingredientInQuestion = 'sugar'

if (ingredientsList.indexOf(ingredientInQuestion) > -1 ) {
  console.log(ingredientInQuestion + ' is on the list');
} else {
  console.log(ingredientInQuestion + ' is not on the list');
}