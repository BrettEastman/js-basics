// The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

function useContinue(array, index) {
  for(var i = 0; i < array.length; i++) {
      if (i === index) {
          continue; // the continue statement will skip to next iteration of loop (must include semi-colon!)
      }
      console.log(array[i]);
  }
}

useContinue(['a', 'b', 'c', 'd'], 1);
// console output:
  // a
  // c
  // d

useContinue([1, 2, 3, 4], 2);
// console output:
  // 1
  // 2
  // 4


//Example from mdn:
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// expected output: "012456789"