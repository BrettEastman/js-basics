function loopAnObjectOfObjects(nestedObject) {
  // create a loop which iterates over the input object
    // create an inner loop which iterates over current inner object
      // log current value to the console
  for(var propkey in nestedObject) {
    for(var innerpropkey in nestedObject[propkey]){
      console.log(nestedObject[propkey][innerpropkey]);
    }
  }
}


loopAnObjectOfObjects({ a: {a: 1, b: 2}, b: {a: 5, b: 6} });
// console output:
  // 1
  // 2
  // 5
  // 6

loopAnObjectOfObjects({ structures: {queue: true, stack: false}, plantLife: {tree: 'leaves'}, letters: {apple: 'a', bag: 'b', cats: 'c'} });
// console output:
  // true
  // false
  // leaves
  // a
  // b
  // c