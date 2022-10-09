
// example from freeCodeCampSolutions
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

function lookUpProfile(name, prop) {
    var matchedObj = contacts.find(function(contact) {
      return contact.firstName === name
    })
    if (matchedObj === undefined) {
      return 'No such contact';
    }
    if (matchedObj[prop] !== undefined) {
      return matchedObj[prop];
    } else {
      return "No such property";
    }
  }

console.log(lookUpProfile("Akira", "likes")); // --> should return [ 'Pizza', 'Coding', 'Brownie Points' ]
console.log(lookUpProfile("Kristian", "lastName")) // --> should return the string Vos
console.log(lookUpProfile("Sherlock", "likes")); // --> should return ["Intriguing Cases", "Violin"]