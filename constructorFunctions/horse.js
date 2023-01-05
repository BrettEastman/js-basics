function Horse(name) {
  this.name = name;
}

Horse.prototype.goSomewhere = function(destination) {
  return this.name + ' is galloping to ' + destination + '!';
}


function FlyingHorse(name, color) {
  Horse.call(this, name, color);
  this.name = name;
  this.color = color;
}

FlyingHorse.prototype = Object.create(Horse.prototype);
FlyingHorse.prototype.constructor = FlyingHorse;

FlyingHorse.prototype.goSomewhere = function(destination, milesToDestination) {
  if (milesToDestination < 10) {
    return Horse.prototype.goSomewhere.call(this, destination);
  } else {
    return this.name + ' is flying to ' + destination + '!';
  }
}

var newFlyingHorse = new FlyingHorse('George');

console.log(newFlyingHorse.goSomewhere('town', 11));
