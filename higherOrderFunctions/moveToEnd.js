// Write a function that moves all elements of one type to the end of the array.
// Notes
// Keep the order of the un-moved items the same.

// My solution:
function moveToEnd(arr, el) {
  var arr1 = [];
  var arr2 = [];
  arr.forEach(function(item, i, array) {
    if (item !== el) {
      arr1.push(item);
    } else {
      arr2.push(item);
    }
  });
  return arr1.concat(arr2);
}

// other top Edabit solutions:
function moveToEnd(arr, el) {
	return arr.sort((a) => a == el ? 1: -1)
}

function moveToEnd(arr, el) {
	return arr.filter(x => x != el).concat(arr.filter(x => x == el));
}

function moveToEnd(arr, el) {
	const allEl = arr.filter(elem => elem === el);
	const noEl = arr.filter(elem => elem != el);
    return noEl.concat(allEl);
}

// Examples
console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1)); // ➞ [3, 2, 4, 4, 1, 1]

console.log(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9)); // ➞ [7, 8, 1, 2, 3, 4, 9]

console.log(moveToEnd(["a", "a", "a", "b"], "a")); // ➞ ["b", "a", "a", "a"]
