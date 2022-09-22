//Your code should accept an array of numbers that represent a phone number. E.g., [6, 5, 0, 8, 3, 5, 9, 1, 7, 2]. You code should return a string in this format: '(650) 835-9172'.


// FUNCTION DEFINITION(S)
//This is the constructor, which is just a function, or really a blueprint, or the key that starts the main function. The methods below are all of the properties of the constructor. They are the tools of constructor function. The word "prototype" indicates that the function is contained within the thing before it. As in, "PhoneNumberFormatter.prototype.getAreaCode" means that the getAreaCode method exists under the PhoneNumberFormatter constructor.

// MY VERSION FROM AUG 2022:

// FUNCTION DEFINITION(S)
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  string += this.parenthesize(this.getAreaCode());
  string += ' '
  string += this.getExchangeCode();
  string += '-'
  string += this.getLineNumber();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  return this.slice(0, 3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  return this.slice(3, 6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  return this.slice(6, 10);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};


// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log ('passed');
  } else {
    console.log ('FAILED [' + testName + '] expected ' + expected + ' but got ' + actual)
  }
}

// TESTS CASES
var testObject = new PhoneNumberFormatter([6,5,0,3,3,3,0,9,7,8]);
var result1 = testObject.render();
var expected1 = '(650) 333-0978';
assertEqual(result1, expected1, 'should log passed to indicate actual is same as expected')


// Now this will create an new PhoneNumberFormatter object, called "formatter"
var formatter = new PhoneNumberFormatter([5,3,0,8,6,7,5,3,0,9])
console.log(formatter);
// PhoneNumberFormatter {
//   numbers: [
//     5, 3, 0, 8, 6,
//     7, 5, 3, 0, 9
//   ]
// }

var areaCode = formatter.getAreaCode();
console.log("Area code:", areaCode);
// --> Area code: 530

var exchangeCode = formatter.getExchangeCode();
console.log("Exchange code:", exchangeCode);
// --> Exchange code: 867

var lineNumber = formatter.getLineNumber();
console.log("Line number:", lineNumber);
// --> Line number: 5309

var formattedNumber = formatter.render();
console.log("Full formatted number:",formattedNumber);
// --> Full formatted number: (530) 867-5309



// MY VERSION FROM JUNE 2022:
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

//method #1 (or property #1). This is the ultimate method which brings everything together to output the final result:
PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  //get area code, wrap in parentheses, add to string
  string += this.parenthesize(this.getAreaCode())
  string += " ";
  //get exchange code, add to string
  string += this.getExchangeCode();
  //add hyphen to string
  string += "-";
  //get line number, add to string
  string += this.getLineNumber();
  return string;
};

//method #2 - returns the first three characters of the string
PhoneNumberFormatter.prototype.getAreaCode = function() {
  return this.sliceJoin(0, 3);
};

//method #3 - returns the next three characters of the string
PhoneNumberFormatter.prototype.getExchangeCode = function() {
  //the "sliceJoin" referred to hear is from the bottom method (method #6 as I call it) "PhoneNumberFormatter.prototype.sliceJoin". That method uses the regular slice then joins it into a string.
  return this.sliceJoin(3, 6);
};

//method #4 - returns the next four chars
PhoneNumberFormatter.prototype.getLineNumber = function() {
  return this.sliceJoin(6, 10);
};

//method #5 - just puts a parantheses around a string
PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

//method #6 - cuts a slice of the array then joins the characters together
PhoneNumberFormatter.prototype.sliceJoin = function(start, end) {
  return this.numbers.slice(start, end).join('');
};


//this will create an object: formatter {numbers: [5,3,0,8,6,7,5,3,0,9]}
var formatter = new PhoneNumberFormatter([5,3,0,8,6,7,5,3,0,9])
console.log(formatter);

//here are just the pieces:
var areaCode = formatter.getAreaCode();
console.log("Area code:", areaCode);

var exchangeCode = formatter.getExchangeCode();
console.log("Exchange code:", exchangeCode);

var lineNumber = formatter.getLineNumber();
console.log("Line number:", lineNumber);

//here is the final outcome:
var formattedNumber = formatter.render();
console.log("Full formatted number:",formattedNumber);