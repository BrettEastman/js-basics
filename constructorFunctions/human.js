function Human(name, wpm) { //wpm means "words per minute"
  this.name = name;
  this.wpm = wpm;
  this.location = 0;
}

Human.prototype.walk = function () {
  this.location++;
}

Human.prototype.run = function () {
  this.location+=2;
}

Human.prototype.wordLengths = function () {
  console.log(this.wpm);
}

var newHuman = new Human('Smith', 120);

//every time we run the walk function, it adds to the location
newHuman.walk();
newHuman.walk();
newHuman.walk();
newHuman.location;