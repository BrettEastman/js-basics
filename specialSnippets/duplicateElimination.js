// To eliminate duplicates, the filter() method is used to include only the elements whose indexes match their indexOf values, since we know that the filer method returns a new array based on the operations performed on it:

let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((element, index) => {
  return chars.indexOf(element) === index;
});

console.log(uniqueChars);