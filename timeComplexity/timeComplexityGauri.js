let n = 10;

// O(n)
let ctr1 = 0;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < n; j++) {
    ctr1++;
  }
}
console.log(ctr1);  // 30

// O( n*log(n))
let ctr2 = 0;
for (let i = 0; i < n; i++) {       // linear: O(n)
  for (let j = 1; j < n; j *= 2) {  // logarithmic: O(log(n))
    ctr2++;                         // constant: O(1)
  }
}
console.log(ctr2);  // 40

// O(n^2)
let ctr3 = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    ctr3++;
  }
}
console.log(ctr3); // 100

// O(2^n)
let ctr4 = 0;
function recursive(n) {
  ctr4++;
  if (n <= 1) return 1;
  return recursive(n - 1) + recursive(n - 1);
}
recursive(n);
console.log(ctr4); // 1023