var thisFunc = function(one, two) {
  console.log(this, one, two);
}

var red = {color: "red"};
var green = {color: "green"};
var blue = {color: "blue"};

red.method = thisFunc;
// red === { color: 'red', method: [Function: thisFunc] }

// There will usually be a relevant "focal object" for any method call, and that object generally appears to the left of the dot when the method is called:
// console.log(red.method(green, blue));  // { color: 'red', method: [Function: thisFunc] } { color: 'green' } { color: 'blue' }

// "Left of the dot" is just a memorable expression. The same rules apply if you use brackets instead of a dot:
//console.log(red['method'](green, blue));

// When there's no dot specifying a binding for this, JS binds it to the global object as a default value. This is a similar to how position parameteres get bound to undefined if you call a function without enough arguments.
// console.log(thisFunc(green, blue));
// <global>, { color: 'green' }, { color: 'blue' }

// console.log(thisFunc.call(red, green, blue)); // { color: 'red', method: [Function: thisFunc] } { color: 'green' } { color: 'blue' }

var yellow = {color: "yellow"};

// console.log(red.method.call(yellow, green, blue));  // { color: 'yellow' } { color: 'green' } { color: 'blue' }

console.log(setTimeout(function() {
  red.method(green, blue)
  }, 1000));
// { color: 'red', method: [Function: thisFunc] }, undefined, undefined