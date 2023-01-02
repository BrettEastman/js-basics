// The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.

// mdn example:
let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log(i);
// expected output: 3


// prep-course example #1:
function useBreak(array, index) {
  for(i = 0; i < array.length; i++) {
      if (i > index) {
          break; // use described statement to stop the loop completely (must include semi-colon!)
      }
      console.log(array[i]);
  }
}

useBreak(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // a
  // b
  // c


useBreak([1, 2, 3, 4, 5, 6], 3);
// console output:
  // 1
  // 2
  // 3
  // 4


// prep-course example #2:
var numsArray = [1, 2, 3, 4, 5];

// stipulation: do not print out elements with index value greater than 2
for (var i = 0; i < numsArray.length; i++) {
  if (i > 2) {
    console.log('FOR LOOP BROKEN');
    break; // this tells the loop to end
  } else {
    console.log('current index:', i);
    console.log('current element:', numsArray[i]);
    console.log('=============='); //gives context for when each iteration of loop ends
  }
}