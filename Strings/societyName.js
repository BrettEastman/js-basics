// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

// The secret society's name should be entirely uppercased.

function societyName(friends) {
  //create societyName empty string
  var societyName = '';
  // iterate through the array
  for (var i = 0; i < friends.length; i++) {
    // grab the first index of the string at each arr index and concatenate it to societyName
    societyName += friends[i][0];
  }
  // return societyName
  return societyName.toUpperCase().split('').sort().join('');
}

console.log(societyName(["Adam", "Sarah", "Malcolm"])); //➞ "AMS"

console.log(societyName(["Harry", "Newt", "Luna", "Cho"])); //➞ "CHLN"

console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])); //➞ "CJMPRR"