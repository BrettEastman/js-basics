//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const array = [1, 2, 3, 4, 5];

// checks whether an element is even
// even variable is the name of the function, element is the parameter of the function, arrow indicates that it is a function that will return without having to write the word return
const even = (element) => element % 2 === 0;


console.log(array.some(even));
// expected output: true


  
// Julie messing around example:

['somethingelse', 'lasdfisdfsdce', 'lace', 'not', 'something'].some(function(word, index) {
    return word.includes('lace')
});
