//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

//example with array of integers:
const array1 = [1, 2, 3];
console.log(array1.includes(2)); // --> true


//example with long number:
var number = [12345];
console.log(number.includes(2));


//example with array of strings:
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // --> true

console.log(pets.includes('at')); // --> false


//Julie example with searching partial string in long string:
console.log('jsdkfhsdjsfkjdlaceasdkjfhkasdjhfkasjdfhsdf'.includes('lace'));
// --> true