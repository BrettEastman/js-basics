// Given a string of numbers separated by a comma and space, return the product of the numbers. Bonus: Try to complete this challenge in one line!

function multiplyNums(nums) {
    // create product variable
    var product = 1;
    // create array of nums using split
    var numsArr = nums.split(', ');
    // iterate over the array
    for (var i = 0; i < numsArr.length; i++) {
        // use times equals to muliply them together
        product *= numsArr[i];  
    }
    // return the product variable
    return product;
}

console.log(multiplyNums("2, 3")); // ➞ 6

console.log(multiplyNums("1, 2, 3, 4")); // ➞ 24

console.log(multiplyNums("54, 75, 453, 0")); // ➞ 0

console.log(multiplyNums("10, -2")); // ➞ -20