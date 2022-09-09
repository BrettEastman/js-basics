// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".

// Generation	Male	Female
// -3	great grandfather	great grandmother
// -2	grandfather	grandmother
// -1	father	mother
// 0	me!	me!
// 1	son	daughter
// 2	grandson	granddaughter
// 3	great grandson	great granddaughter

function generation(x, y) {
  if (x === -3 && y === "f") {
    return "great grandmother";
  } else if (x === -3 && y === "m") {
    return "great grandfather";
  } else if (x === -2 && y === "f") {
    return "grandmother";
  } else if (x === -2 && y === "m") {
    return "grandfather";
  } else if (x === -1 && y === "f") {
    return "mother";
  } else if (x === -1 && y === "m") {
    return "father";
  } else if (x === 0) {
    return "me!";
  } else if (x === 1 && y === "f") {
    return "daughter";
  } else if (x === 1 && y === "m") {
    return "son";
  } else if (x === 2 && y === "f") {
    return "granddaughter";
  } else if (x === 2 && y === "m") {
    return "grandson";
  } else if (x === 3 && y === "f") {
    return "great granddaughter";
  } else if (x === 3 && y === "f") {
    return "great grandson";
  }
}

console.log(generation(2, "f")); // ➞ "granddaughter"

console.log(generation(-3, "m")); // ➞ "great grandfather"

console.log(generation(1, "f")); // ➞ "daughter"
