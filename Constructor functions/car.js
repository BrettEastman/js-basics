//Object Oriented Programming in JavaScript

//Consider the case wherein we wish to create multiple objects, all of which have a relatively similar structure. We are also going to, rather than declaring functions as we have previously, assign properties of the prototype to be functions.

// this is a constructor function, we will use it to create new instances of our cars
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