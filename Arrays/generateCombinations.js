//List all combinations of two arrays:

function generateCombinations(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++) {
          console.log(array1[i] + ' ' + array2[j])
      }
  }
}

generateCombinations(['a', 'b', 'c'], ['d', 'e', 'f']);
// console output:
// a d
// a e
// a f
// b d
// b e
// b f
// c d
// c e
// c f

generateCombinations([1, 2], ['buckle', 'my', 'shoe']);
// console output:
// 1 buckle
// 1 my
// 1 shoe
// 2 buckle
// 2 my
// 2 shoe