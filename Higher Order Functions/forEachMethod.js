// forEach is a method that loops over an array and takes a callback function with three parameters: element, index, array
// forEach doesn't return anything. For example, if you want to return a new array, you need to build a new array, or if you want to return a sum you need to start with a sum variable outside of the forEach method.


// leetcode problem: Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.
var runningSum = function(nums) {
    let sums = [];
    let currSum = 0;
    nums.forEach((num) => {
      currSum += num;
      sums.push(currSum);
    })
    return sums;
  }
  
  console.log(runningSum([1,2,3,4]))
  // Output: [1,3,6,10]
  
  
  // Julie example:
  function squareSum(numbers) {
    var result = 0;
    numbers.forEach(function(number, i, numArray){
      console.log('number', number)
      console.log('i', i)
      console.log('numArray', numArray)
      console.log('--------- next loop ---------')
    })
    return result;
  }
  
  squareSum([46, 687, -3, 1000, 5])
  // --> 
  /*
  number 46
  i 0
  numArray [ 46, 687, -3, 1000, 5 ]
  --------- next loop ---------
  number 687
  i 1
  numArray [ 46, 687, -3, 1000, 5 ]
  --------- next loop ---------
  number -3
  i 2
  numArray [ 46, 687, -3, 1000, 5 ]
  --------- next loop ---------
  number 1000
  i 3
  numArray [ 46, 687, -3, 1000, 5 ]
  --------- next loop ---------
  number 5
  i 4
  numArray [ 46, 687, -3, 1000, 5 ]
  --------- next loop ---------
  */
  
  
  //Example from Codesmith prep course:
  function droids(arr) {
    let result = '';
    arr.forEach(function(i) {
      if (i === "Droids") {
        result = "Found Droids!"
      } else {
        result = "These are not the droids you're looking for."
      }
    })
    return result;
  }
  
  const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
  const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
  console.log(droids(starWars)) // should log: "Found Droids!"
  console.log(droids(thrones)) //should log: "These are not the droids you're looking for."
  
  // here is what the above example would look like with a regular for loop:
  function droids(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "Droids") {
        result = "Found Droids!";
      } else {
        result = "These are not the droids you're looking for."
      }
    }
    return result;
  }
  
  
  
  // other example:
  function squareSum(numbers) {
    var result = 0;
    numbers.forEach(function(number){
      result += number ** 2;
    })
    return result;
  }
  
  console.log(squareSum([46, 687, -3, 1000, 5])); //1474119 
  console.log(squareSum([1, 2, 3, 4])); // 30
  
  // with an arrow function
  function squareSum(numbers) {
    var result = 0;
    numbers.forEach((number) => {
      result += number ** 2;
    })
    return result;
  }
  
  
  // from Codesmith, a recreated version of forEach in a standard, declared function. It makes use of another recreated version of map.
  
  function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  }
  
  function map(arr, call) {
    //initialize new array
    let result = [];
    //call forEach with the passed in array, and a new function that will take in an array element.
    forEach(arr, function(element) {
      //invoke the passed in callback function with the current array element given to us by forEach
      result.push(call(element))    
    })
    return result;
  }
  
  console.log(typeof forEach); // should log: 'function'
  forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
  console.log(typeof map); // should log: 'function'
  console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]