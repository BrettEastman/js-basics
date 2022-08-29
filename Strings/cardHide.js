// Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.
// Ensure you return a string.
// The length of the string must remain the same as the input.

// my solution:
function cardHide(card) {
    // split into an array
    card = card.split('');
    // create variable starsString of stars that is the length of the array - 4
    var starsString = "";
    for (var i = 0; i < card.length - 4; i++) {
        starsString += "*"
    }
    // use splice to remove up to card.length - 4 and replace with starsString
    card.splice(0, card.length - 4, starsString);
    // join the array back into a string and return it
    return card.join('');
}

// better solution:
const cardHide = card => '*'.repeat(card.length - 4) + card.slice(-4);

console.log(cardHide("1234123456785678")); //➞ "************5678"

console.log(cardHide("8754456321113213")); //➞ "************3213"

console.log(cardHide("35123413355523")); //➞ "**********5523"