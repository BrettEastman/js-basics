// .toString()

// MAIN EXAMPLES:
function applyToString(param) {
  // create a stringVersion variable
  // assign it to the string version of the input param
  var stringVersion = param.toString();
  // return the stringVersion variable
  return stringVersion;
}

var input1 = 9374;
var resultString1 = applyToString(input1);
console.log('should log "9374":', resultString1); // should log "9374": 9374
console.log('type should be "string":', typeof resultString1); // type should be "string": string

var input2 = false;
var resultString2 = applyToString(input2);
console.log('should log "false":', resultString2); // should log "false": false
console.log('type should be "string":', typeof resultString2); // type should be "string": string


// If the “toString()” method is invoked without passing any argument, then the “number” will be converted to “string” without changing the current base:
var number = 433;
console.log("String: " + number.toString());

// to convert a number to binary, put "2" in as an argument (use "8" for octal, "16" for hexadecimal)
console.log("String with base 2 : " + number.toString(2));
// outputs 'String with base 2 : 110110001'
console.log("String with base 16: " + number.toString(16));
// outputs 'String with base 16: 1b1'