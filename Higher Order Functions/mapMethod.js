// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. map calls a provided callbackFn function once for each element in an array, in order, and constructs a new array from the results. callbackFn is invoked only for indexes of the array which have assigned values (including undefined).

//--> Map translates data from one type to another. Doesn’t necessarily mean that the data type changes - but you are changing from one form to another.
//--> Map will always return a collection the same size and order as its input. If you map an array of 3 things, you will get an array of 3 elements back, and the first item in the input will always correspond with the first item of the output.
//--> The result of map is always a new collection - the input collection is not modified.
//--> Map operations are inherently chainable. data.map(...).map(...).map(...) is a common pattern.

//ORDER:
// map(function(element, index, array){ /* … */ })

// Example by Ryan Guill:
var data = [
    {id: 1, firstName: "Ryan", lastName: "Guill", email: "ryanguill@gmail.com"},
    {id: 2, firstName: "John", lastName: "Doe", email: "johndoe@example.com"},
    {id: 3, firstName: "Mary", lastName: "Smith", email: "marysmith@example.com"}
];

data.map(function(item) {
    return item.firstName + " " + item.lastName + " <" + item.email + ">"; 
});
//["Ryan Guill <ryanguill@gmail.com>", "John Doe <johndoe@example.com>", "Mary Smith <marysmith@example.com>"]


// leetcode problem: Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.
function runningSum(nums) {
  return nums.map(function(num, i) {
    if (i === 0) {
      return num;
    } else {
      return nums[i] = num + nums[i - 1]
    }
  });
}

console.log(runningSum([1,2,3,4]))
// Output: [1,3,6,10]


//MDN EXAMPLE #1:
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

//MDN EXAMPLE #2:
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

//MDN EXAMPLE #3:
const kvArray = [{ key: 1, value: 10 },
                 { key: 2, value: 20 },
                 { key: 3, value: 30 }];

const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]


//if map were a standard function, it could look like this:
function map(array, callbackFunction) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(callbackFunction(array[i]));
  }
  return newArray;
}

// here is the Codesmith example of making your own map function (preparation for learning the actual map function):

function map(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

function subtractTwo(num) {
  return num - 2;
}

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]