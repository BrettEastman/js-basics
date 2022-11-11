//The formula for generating random numbers: var randomBetweenMinAndMax = Math.random() * (max - min) + min;

//Example - Getting a random number between 0 (inclusive) and 1 (exclusive) (default is always between 0 and 1):
function getRandom() {
  return Math.random();
}

//Example - Getting a random number between two values
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//Example - Getting a random integer between two values
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// example - generate random number between 1-10:
var randomNum = Math.floor((Math.random() * 10) + 1);
// using floor with round it down, thus giving us a value between 0-9. Then we add 1 to make it between 1-10. If you use round(), half the time you would get 2-9. Using floor() ensures that the number is always rounded down to the nearest integer