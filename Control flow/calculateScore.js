// Abigail and Benson are playing Rock, Paper, Scissors.

// Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.

// Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".

// R stands for Rock
// P stands for Paper
// S stands for Scissors

function calculateScore(games) {
	// create A points var
    var aPoints = 0;
    // create B points var
    var bPoints = 0;
    for (var i = 0; i < games.length; i++) {
        // if, else if conditionals for all combinations
        if (games[i][0] === "R" && games[i][1] === "P") {
            bPoints++;
        } else if (games[i][0] === "R" && games[i][1] === "S") {
            aPoints++;
        } else if (games[i][0] === "P" && games[i][1] === "R") {
            aPoints++;
        } else if (games[i][0] === "P" && games[i][1] === "S") {
            bPoints++;
        } else if (games[i][0] === "S" && games[i][1] === "P") {
            aPoints++;
        } else if (games[i][0] === "S" && games[i][1] === "R") {
            bPoints++;
        }
    }   
    // if A points greater than B
    if (aPoints > bPoints) {
        // A wins
        return "Abigail";
    // else if both the same
    } else if (bPoints > aPoints) {
        return "Benson";
    } else {
        return "Tie";
    }
}

console.log(calculateScore([["R", "P"], ["R", "S"], ["S", "P"]])); // ➞ "Abigail"

// Benson wins the first game (Paper beats Rock).
// Abigail wins the second game (Rock beats Scissors).
// Abigail wins the third game (Scissors beats Paper). 
// Abigail wins 2/3.

console.log(calculateScore([["R", "R"], ["S", "S"]])); // ➞ "Tie"

console.log(calculateScore([["S", "R"], ["R", "S"], ["R", "R"]])); // ➞ "Tie"