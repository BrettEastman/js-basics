// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).
// The value argument will be a number.

function addName(obj, name, value) {
  // if the name is undefined
  if (obj[name] === undefined) {
    // add it and give it the value of value
    obj[name] = value;
  }
  return obj; 
}

console.log(addName({}, "Brutus", 300)); // ➞ { Brutus: 300 }

console.log(addName({ piano: 500 }, "Brutus", 400)); // ➞ { piano: 500, Brutus: 400 }

console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)); // ➞ { piano: 500, stereo: 300, Caligula: 440 }