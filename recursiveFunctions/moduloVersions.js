// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

// Thomas' pseudocode (11/29/22)
  // FIRST: if y is less than 0,
    // reassign it to pos. y
  // BASE CASES:
  // if y is 0,
    // return NaN
  // pos. x: x - y is less than 0,
    // return x
  // neg. x: x + y is more than 0,
    // return x
  // RECURSIVE CASES:
  // if x is pos,
    // invoke modulo with x-y & y
  // (otherwise) invoke modulo with x+y & y

  // Thomas' version (11/29/22)
  var modulo = function(x, y) {
    if (!y) {
      return NaN;
    }

    if (y < 0) {
      y = -(y);
    }

    if (x > -1) {
      if (x - y < 0) {
        return x;
      }
      return modulo(x - y, y);
    }

    if (x < 0) {
      if (x + y === 0) {
        return -0;
      }
      if (x + y > 0) {
        return x;
      }
      return modulo(x + y, y);
    }
  };

  // Brett's version (11/29/22):
  var modulo = function(x, y) {
    var resultIsPositive;
    var remainder;
    if (y > 0 && x > 0) {
      resultIsPositive = true;
    } else if (x < 0 && y < 0) {
      x = -x;
      y = -y;
      resultIsPositive = false;
    } else if (x < 0 && y > 0) {
      x = -x;
      resultIsPositive = false;
    } else if (x > 0 && y < 0) {
      y = -y;
      resultIsPositive = true;
    }
    if (x === 0 && y === 0) {
      return NaN;
    }
    if (x === 0 || y === 0) {
      return 0;
    }
    if (x < y) {
      remainder = x;
    } else {
      remainder = modulo(x - y, y);
    }
    if (resultIsPositive !== false) {
      return remainder;
    } else {
      return -remainder;
    }
  };