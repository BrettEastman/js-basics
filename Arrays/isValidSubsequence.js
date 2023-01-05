// Give two non-empty arrays of integers, determine if the 2nd is a subsequence of the first. A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array, but are in the same order as they appear in the array. Note that a single number in an array and the array itself are both valid subsequences of the array.

// my re-try the following day:
function isValidSubsequence(array, sequence) {
  var arrInd = 0;
  var seqInd = 0;
  while (arrInd < array.length) {
    if (sequence[seqInd] === array[arrInd]) {
      seqInd++;
    }
    arrInd++;
  }
  return seqInd === sequence.length;
}

// their version:
function isValidSubsequence(array, sequence) {
  let arrInd = 0;
  let seqInd = 0;
  while (arrInd < array.length && seqInd < sequence.length) { // it goes through array one at a time, incrementing the index count each time. The seq index only increments if it is in the array. In the end, if the sequence index is the same as the sequence.length, that means that all of the items were found in the array, in the sequence order.
    if (array[arrInd] === sequence[seqInd]) seqInd++;
    arrInd++;
  }
  return seqInd === sequence.length;
}

// my version - passes all but one test - far too bulky and slapped together
function isValidSubsequence(array, sequence) {
  if (sequence.length === 1 && array.includes(sequence[0])) {
    return true;
  }
  if (sequence.length === array.length) {
    for (let k = 0; k < sequence.length; k++) {
      if (array[k] === sequence[k]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
  var cutArr = array.slice();
  var pushArr = [];
  for (let i = 0; i < sequence.length; i++) {
    if (cutArr.includes(sequence[i])) {
      var cutInd = cutArr.indexOf(sequence[i]);
      var tempVal = cutArr[cutInd];
      pushArr.push(tempVal);
      cutArr.splice(cutInd, 1);
      console.log(pushArr);
      cutArr = cutArr.slice(1);
    }
  }
  for (let j = 0; j < sequence.length; j++) {
    if (pushArr[j] === sequence[j]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

// function isValidSubsequence(array, sequence) {
//   if (sequence.length === 1 && array.includes(sequence[0])) {
//     return true;
//   }
//   if (sequence.length > array.length) {
//     return false;
//   }
//   var filterArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (sequence.includes(array[i]) && filterArr.length < sequence.length) {
//       filterArr.push(array[i]);
//     }
//   }
//   console.log(filterArr);
//   for (let j = 0; j < filterArr.length; j++) {
//     if (filterArr[j] === sequence[j]) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

var arr = [5,1,22,25,6,-1,8,10];
var subseq1 = [1,6,-1,10];
var subseq2 = [2,7,-1,10];
var arr9 = [1, 1, 1, 1, 1]
var subseq9 = [1, 1, 1];
var arr15 = [5, 1, 22, 25, 6, -1, 8, 10];
var subseq15 = [1, 6, -1, -1];
var arr25 = [5, 1, 22, 25, 6, -1, 8, 10];
var subseq25 = [1, 6, -1, 5];
var arr3 = [5, 1, 22, 25, 6, -1, 8, 10];
var subseq3 = [5, 1, 22, 6, -1, 8, 10];


// console.log(isValidSubsequence(arr, subseq1));
console.log(isValidSubsequence(arr3, subseq3));
