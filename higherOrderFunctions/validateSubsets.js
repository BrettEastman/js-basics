// Write a function that returns true if all subsets in a list belong to a given set.

// Notes:
// The empty set and the set itself are both valid subsets of a set (we are not talking about proper subsets here).
// The set and the subset will each have unique elements.

// My solution:
function validateSubsets(subsets, set) {
  var valid = true;
  subsets.forEach(function(item) {
    item.forEach(function(num) {
      if (set.indexOf(num) === -1) {
        valid = false;
      }
    });
  });
  return valid;
}

// top solutions on Edabit:
const validateSubsets = (subsets, set) =>
  subsets.every(subset => subset.every(num => set.includes(num)));

function validateSubsets(subsets, set) {
  return subsets.every(a => a.every(b => set.indexOf(b) !== -1));
}


// Tests:
console.log(validateSubsets([[1, 2], [2, 3], [1, 3]], [1, 2, 3])) // ➞ true

console.log(validateSubsets([[1, 2, 3], [2], [3], []], [1, 2, 3])) // ➞ true

console.log(validateSubsets([[1, 2], [2, 3], [1, 4]], [1, 2, 3])) // ➞ false

console.log(validateSubsets([[1, 2, 3, 4]], [1, 2, 3])) // ➞ false