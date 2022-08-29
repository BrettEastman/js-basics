// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return the string No such contact.
// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

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

  // my solution:
  function lookUpProfile(name, prop) {
    // var isName = false;
    var matchedObj;
    for (var i = 0; i < contacts.length; i++) {
      var currentObj = contacts[i];
      if (currentObj.firstName === name) {
        // isName = true;
        matchedObj = currentObj;
        break;
      }
    }
    if (matchedObj === undefined) {
      return "No such contact";
    }
    if (matchedObj[prop] !== undefined) {
      return matchedObj[prop];
    } else {
      return "No such property";
    }
  }
  
  // Julie's first solution:
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
  
  //Julie's second solution:
  function lookUpProfile2(name, prop) {
    var index = contacts.findIndex(function(contact) {
      return contact.firstName === name
    })
    if (index === -1) {
      return 'No such contact';
    }
    var result = contacts[index][prop]
    if (result !== undefined) {
      return result;
    } else {
      return "No such property";
    }
  }
  
  console.log(lookUpProfile2("Akira", "likes")); // --> should return [ 'Pizza', 'Coding', 'Brownie Points' ]
  console.log(lookUpProfile2("Kristian", "lastName")) // --> should return the string Vos
  console.log(lookUpProfile2("Sherlock", "likes")); // --> should return ["Intriguing Cases", "Violin"]