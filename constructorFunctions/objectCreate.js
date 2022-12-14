// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. Pass in your desired fallback object (existing object), and it produces a new object that delegates failed lookups to your fallback object.

// mdn example:

const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
