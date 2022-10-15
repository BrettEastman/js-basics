function loopInReverse(array) {
  for (var i = array.length - 1; i > -1; i--) {
      console.log(array[i]);
  }
}

loopInReverse(['a', 'b', 'c', 'd']);
// console output:
// d
// c
// b
// a

loopInReverse([1, 2, 3, 4]);
// console output:
// 4
// 3
// 2
// 1