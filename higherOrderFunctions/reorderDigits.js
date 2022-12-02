// Create a function that reorders the digits of each numerical element in an array based on ascending (asc) or descending (desc) order.

// Notes
// Single-digit numbers should be ordered the same regardless of direction.
// Numbers in the array should be kept the same order.

function reorderDigits(arr, direction) {
  var resultArr = [];
  var orderedNum;
  arr.forEach(function(item) {
    var currentNum = item.toString();
    if (currentNum.length > 1) {
      var currentNumArr = currentNum.split('');
      currentNumArr = currentNumArr.sort();
      if (direction === 'asc') {
        orderedNum = Number.parseInt(currentNumArr.join(''));
        resultArr.push(orderedNum);
      } else if (direction === 'desc') {
        currentNumArr = currentNumArr.reverse();
        orderedNum = Number.parseInt(currentNumArr.join(''));
        resultArr.push(orderedNum);
      }
    } else {
      resultArr.push(item);
    }
  });
  return resultArr;
}

// other top Edabit solutions:
// #1
const asc = (a, b) => a - b;

const desc = (a, b) => b - a;

const reorderDigits = (arr, direction) =>
  arr.map(num =>
    Number(
      String(num)
        .split('')
        .sort(direction === 'asc' ? asc : desc)
        .join('')
    )
  );

// #2
function reorderDigits(arr, direction) {
  return arr.map(el => Number(el
                    .toString()
                    .split``
                    .sort((a,b) => (direction=='asc') ? a-b : b-a)
                    .join``));
}

// #3
function reorderDigits(arr, direction) {
	return arr.map(function(el,i){
		return (''+el).split('').sort(function(a,b) {
			if (direction == 'asc') return a-b;
			else return b-a;
		}).join('')|0;
	});
}

// Examples
console.log(reorderDigits([515, 341, 98, 44, 211], "asc")); // ➞ [155, 134, 89, 44, 112]

console.log(reorderDigits([515, 341, 98, 44, 211], "desc")); // ➞ [551, 431, 98, 44, 211]

console.log(reorderDigits([63251, 78221], "asc")); // ➞ [12356, 12278]

console.log(reorderDigits([63251, 78221], "desc")); // ➞ [65321, 87221]

console.log(reorderDigits([1, 2, 3, 4], "asc")); //  ➞ [1, 2, 3, 4]

console.log(reorderDigits([1, 2, 3, 4], "desc")); // ➞ [1, 2, 3, 4]
