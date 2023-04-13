let n = 10;

// O(n) - Linear
let ctr1 = 0;
for (let i = 0; i < 3; i++) { // this for loop is always the same number of operations, so it does not grow with n, it is constant
  for (let j = 0; j < n; j++) {
    ctr1++;
  }
}
console.log(ctr1);  // 30

// O( n*log(n)) - Log-linear
let ctr2 = 0;
for (let i = 0; i < n; i++) {       // linear: O(n)
  for (let j = 1; j < n; j *= 2) {  // logarithmic: O(log(n))
    ctr2++;                         // constant: O(1)
  }
}
console.log(ctr2);  // 40

// O(n^2) - Quadratic
let ctr3 = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) { // both loops grow in the number of operations as n gets larger, so it's an n * n time complexity
    ctr3++;
  }
}
console.log(ctr3); // 100

// O(2^n) - Exponential
let ctr4 = 0;
function recursive(n) {
  ctr4++;
  if (n <= 1) return 1;
  return recursive(n - 1) + recursive(n - 1);
}
recursive(n);
console.log(ctr4); // 1023