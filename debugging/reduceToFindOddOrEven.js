//There's a bug in this code. Where is it? If inspection of the console output doesn't show the error immediately, then start walking through it as though you were the interpreter.Try it now, and see if you can spot the error!

// starting code with bugs:
var numbers = [5, 3, 8, 6, 9, 1, 0, 2, 2];
var oddEvenCounts = numbers.reduce(function(counts, number) {
  if (isOdd(number)) {
    counts[odd]++;
  } else {
    counts[even]++;
  }
}, {});

//Brett's version (good):
function isOdd(number) {
    return number % 2 === 1; //first I needed to make this function that was missing
}

var numbers = [5, 3, 8, 6, 9, 1, 0, 2, 2];
var oddEvenCounts = numbers.reduce(function(counts, number) {
  
  if (isOdd(number)) {
    counts['odd']++;
  } else {
    counts['even']++;
  }
  return counts;
}, {'odd': 0, 'even': 0}); //then I had to set the initialValue to an object with the "odd" and "even" keys already defined.

console.log('oddEvenCounts', oddEvenCounts);

// Julie's version (which also makes use of my isOdd function above):
var numbers = [5, 3, 8, 6, 9, 1, 0, 2, 2];
var oddEvenCounts2 = numbers.reduce(function(counts, number) {
  if (isOdd(number)) {
    if (counts.odd === undefined) {
      counts.odd = 0 // She defined the object keys here instead of at the end in the initialValue like how I did.
    }
    counts.odd++;
  } else {
    if (counts.even === undefined) {
      counts.even = 0
    }
    counts.even++;
  }
  return counts;
}, {});

console.log('oddEvenCounts2', oddEvenCounts2);
