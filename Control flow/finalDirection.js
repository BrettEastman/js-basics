// You face 1 out of the 4 compass directions: N, S, E or W.

// A left turn is a counter-clockwise turn. e.g. N (left-turn) ➞ W.
// A right turn is a clockwise turn. e.g. N (right-turn) ➞ E.
// Create a function that takes in a starting direction and a sequence of left and right turns, and outputs the final direction faced.

// You can only face 1 out of the 4 compass directions: N, S, E or W.

function finalDirection(initial, turns) {
  result = initial;
	for (var i = 0; i < turns.length; i++) {
    if (result === "N" && turns[i] === "L") {
      result = "W";
    } else if ((result === "N" && turns[i] === "R")) {
      result = "E";
    } else if ((result === "E" && turns[i] === "L")) {
      result = "N";
    } else if ((result === "E" && turns[i] === "R")) {
      result = "S";
    } else if ((result === "S" && turns[i] === "L")) {
      result = "E";
    } else if ((result === "S" && turns[i] === "R")) {
      result = "W";
    } else if ((result === "W" && turns[i] === "L")) {
      result = "S";
    } else if ((result === "W" && turns[i] === "R")) {
      result = "N";
    }
  }
  return result;
}

console.log(finalDirection("N", ["L", "L", "L"])); //➞ "E"

console.log(finalDirection("N", ["R", "R", "R", "L"])); //➞ "S"

console.log(finalDirection("N", ["R", "R", "R", "R"])); //➞ "N"

console.log(finalDirection("N", ["R", "L"])); //➞ "N"