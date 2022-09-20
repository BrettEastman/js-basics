// Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr. The value returned should be an array with the low, high, and range.

function getTheRange(arr){
  let low = arr[0];
  let high = arr[1];
  let rangeArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < low) {
      low = arr[i];
    } else if (arr[i] > high) {
      high = arr[i];
    }
  }
  let range = high - low;
  rangeArr.push(low, high, range);
  return rangeArr;
}

console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]