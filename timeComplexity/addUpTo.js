// two versions of addUpTo with very different time complexities
// comment out the one not being tested:
// 1)
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += 1;
  }
  return total;
}
// Time Elapsed: 0.9365548330545426 seconds.

// 2)
function addUpTo(n) {
  return n * (n + 1) /2;
}
// Time Elapsed: 0.00001804196834564209 seconds.

let t1 = performance.now(); // this function returns a high resolution timestamp in milliseconds
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
