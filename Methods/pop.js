//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]


//Prep-course function example:
function removeFromBack(arr) {
  arr.pop(); //on it's own, this would return only the element at the back (in this case, 3)
  return arr; //but we want to return the rest of the array AFTER the pop method has been applieed
}

var output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]