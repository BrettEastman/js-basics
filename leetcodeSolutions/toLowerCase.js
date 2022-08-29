// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// my solution:
var toLowerCase = function(s) {
    let newString = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i].toLowerCase() !== s[i]) {
            newString += s[i].toLowerCase();
        } else {
            newString += s[i];
        }
    }
    return newString;
};

//  best solution:
var toLowerCase = function(str) {
    let lowerCase = "";
    
    for (let letter of str) {
        const index = letter.charCodeAt(0);
        if (index >= 65 && index <= 90) {
            letter = String.fromCharCode(index + 32);
        }
        lowerCase += letter;
    }
    
    return lowerCase;
};