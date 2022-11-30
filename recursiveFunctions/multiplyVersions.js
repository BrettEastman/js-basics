// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.

// Julie's solution:
var multiply = function(x, y) {
  if (y < 0) {
    y = -y;
    x = -x;
  }

  if (y === 0) {
    return 0;
  }

  return multiply(x, y - 1) + x;
};

// Thomas' pseudocode (11/29/22):
  // if x OR y are 0
    // return 0
  // if x AND y are both negative (this allows following IFs to work more tersely)
    // reassign both to positive
  // if y is positive (x is negative)
    // if y is 1 (base case)
      // return x
    // return x plus calling multiply with x & y-1
  // if y is negative (x is positive)
    // if y is -1 (base case)
      // return 'negatized' x
    // return 'negatized' x plus calling multiply with x & y+1

    // Thomas' version (11/29/22):
    var multiply = function(x, y) {
      if (!x || !y) {
        return 0;
      }

      if (x < 0 && y < 0) {
        x = -(x);
        y = -(y);
      }
      if (y > 0) {
        if (y === 1) {
          return x;
        }
        return x + multiply(x, y - 1);
      }
      if (y < 0) {
        if (y === -1) {
          return -(x);
        }
        return -(x) + multiply(x, y + 1);
      }
    };

    // Brett's version (11/29/22):
    var multiply = function(x, y) {
      var resultIsPositive;
      var product;
      if (y > 0 && x > 0) {
        resultIsPositive = true;
      } else if (x < 0 && y < 0) {
        x = -x;
        y = -y;
        resultIsPositive = true;
      } else if (x < 0 && y > 0) {
        x = -x;
        resultIsPositive = false;
      } else if (y < 0 && x > 0) {
        y = -y;
        resultIsPositive = false;
      }
      if (x === 0 || y === 0) {
        return 0;
      }
      if (y === 1) {
        return x;
      }
      y--;
      product = x + multiply(x, y);

      if (resultIsPositive !== false) {
        return product;
      } else {
        return -product;
      }
    };