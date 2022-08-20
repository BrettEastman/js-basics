// RETURNING A FUNCTION:

// Notice that the lines of code testing your work are using functions and an array from previous challenges. The result of using eitherCallback to combine two callbacks into one callback and then passing that one callback into filterArray should match the results of simply passing the two callbacks into eitherFilter in the previous challenge.

function eitherCallback(callback1, callback2) {
    //return a function
    return (element, i, array) => {
      // return the boolean representing whether either callback returns true
      // notice that we need to put all three things in as parameters, but we are really only using element. But, this is good for later uses of this function.
      return callback1(element, i, array) || callback2(element, i, array);
    }
  }
  
  // Uncomment these to check your work!
  function filterArray(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
      // this part confused me at first until I realized we are returning a function, that's what callback is. It's not the result of the function "eitherCallback", it is the function returned by it. I still don't understand why we don't have curly braces after the if statement though.
      if (callback(array[i], i, array)) newArray.push(array[i]);
    }
    return newArray;
  }
  const arrOfNums = [10, 35, 105, 9];
  const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
  const over100 = n => n > 100;
  const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
  console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]