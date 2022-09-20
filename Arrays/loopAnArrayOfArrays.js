function loopAnArrayOfArrays(arrayOfArrays) {
  for (var i = 0; i < arrayOfArrays.length; i++) {
      for (var j = 0; j < arrayOfArrays[i].length; j++) {
          console.log(arrayOfArrays[i][j]);
      }
  }
}

loopAnArrayOfArrays([ ['a', 'b', 'c'], ['d', 'e', 'f'] ]);
// console output:
// a
// b
// c
// d
// e
// f

loopAnArrayOfArrays([ [1, 2], [3, 4], [5], [6, 7, 8] ]);
// console output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8