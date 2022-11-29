//Object Oriented Programming in JavaScript

//Consider the case wherein we wish to create multiple objects, all of which have a relatively similar structure. We are also going to assign properties of the prototype to be functions, rather than declaring functions in the global scope.

// these are constructor functions we will use to create new instances of our cars, showing a Prototypal Class example and a Pseudoclassical Class example. The object relationships are the same. The pseudoclassical pattern is just a thin layer of syntactic convenience on top of the prototypal pattern:

// Prototypal class example, with one method(move) and an instantiation(amy):
var Car = function(loc) {
  var obj = Object.create(Car.prototype);
  obj.loc = loc;
  return obj;
}
Car.prototype.move = function() {this.loc++};

var amy = Car(1);
amy.move();

// But if we add the word "new" to the instantiation of amy (i.e. var amy = new Car(1)), then we put the interpreter into "construction mode" which means it will sneak in operations that it knows you'll want done. It temporarily makes your function run as if there were some extra lines of code at the beginning and end.

var Car = function(loc) {
  // this = Object.create(Car.prototype);
  var obj = Object.create(Car.prototype);
  obj.loc = loc;
  return obj;
  // return this;
}

// which is redundant, so it really should look like:
var Car = function(loc) {
  // this = Object.create(Car.prototype);
  this.loc = loc;
  // return this;
}

// So the completed pseudoclassical version of our Car class, with the move method and one instantiation (amy), looks like the following:
var Car = function(loc) {
  this.loc = loc;
}
Car.prototype.move = function() {this.loc++};

var amy = new Car(1);
amy.move();


// Another pseudoclassical class example:
function Car(color, type) {
  // var this = {};  What is actually happening is that we are creating a "this" object inside the function that stores the information.
  this.color = color;
  this.type = type;
  this.gas = 12;
  // return "this";
}

// below are methods that we have attached to the car's PROTOTYPE chain. Even though we have not assigned a method drive() to our myCar instance above, because we have attached it here to the prototype for Car, each new instance of Car has access to the methods attached to its prototype.
Car.prototype.drive = function() {
  this.gas -= 1;
}

Car.prototype.paintJob = function(color) {
  this.color = color;
}

// now we can generate a new instance of Car using the constructor function as follows:
var myCar = new Car("blue", "sedan");
console.log('myCar:', myCar);

myCar.drive();
console.log('myCar after driving once:', myCar);

myCar.paintJob('silver');
console.log('myCar after paint job:', myCar)

// will log:
// myCar: Car { color: 'blue', type: 'sedan', gas: 12 }
// myCar after driving once: Car { color: 'blue', type: 'sedan', gas: 11 }
// myCar after paint job: Car { color: 'silver', type: 'sedan', gas: 11 }