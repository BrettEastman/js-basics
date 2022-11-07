// Create a function that counts the number of times a particular letter shows up in the word search.
// Notes
// You will always be given an array with five sub-arrays.

function letterCounter(arr, letter) {
  var count = 0;
  arr.forEach(function(itemArr) {
    itemArr.forEach(function(item) {
      if (item === letter) {
        count++;
      }
    });
  });
  return count;
}

// Examples
console.log(letterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D")); // ➞ 3

// "D" shows up 3 times: twice in the first row, once in the third row.

console.log(letterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "H")); // ➞ 2


// top version in Edabit:
const letterCounter = (a, l) =>
 a.flat().filter(x => x == l).length;
