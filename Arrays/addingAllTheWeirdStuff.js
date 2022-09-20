function addingAllTheWeirdStuff(array1, array2){
  let evensSum = 0;
  let oddsSum = 0;
  let greater20 = false;
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] > 20) {
      greater20 = true;
    }
    if (array2[i] % 2 === 0) {
      evensSum += array2[i];
    } else {
      oddsSum += array2[i];
    }
  }
  for (let j = 0; j < array1.length; j++) {
    if (array1[j] < 10) {
      array1[j] += oddsSum;
    } else if (array1[j] > 10) {
      array1[j] += evensSum;
    }
    if (greater20) {
      array1[j]++;
    }
  }
  return array1;
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
