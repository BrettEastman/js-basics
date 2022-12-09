// Algoexpert recursive solution #1
function getNthFib(n) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}

// Algoexpert recursive solution #2
// using a 2nd parameter to create an argument to store information that can be used in each recursive loop
function getNthFib(n, memoize = {1: 0, 2: 1}) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    return memoize[n];
  }
}

// Algoexpert recursive solution #3
function getNthFib(n) {
  const lastTwo = [0,1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}

console.log(getNthFib(6)); // 5


// Non-recursive version:
// function getNthFib(n) {
//   var fibArray = [0, 1];
//   for (var i = 2; i < n; i++) {
//     fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
//   }
//   return fibArray[n - 1]
// }