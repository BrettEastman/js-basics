// Given an object literal of student names and an array of their test scores over the semester, return a list of all the students who passed the course (in alphabetical order). However, there is one more thing to mention: the pass mark is 100% in everything!
// All of a student's test scores must be 100% to pass.
// Remember to return an array of student names sorted alphabetically.

// Brett's version 9/4/22
function whoPassed(students) {
  // create result array
  var result = [];
  // use for in loop to access each of the keys(names) of the object
  for (var key in students) {
    // in each key, the value is an array, create currentGrades var
    var currentGrades = students[key];
    // create perfectGrades arr to true
    var perfectGrades = true;
      // use for loop to access each index of currentGrades
    for (var i = 0; i < currentGrades.length; i++) {
      // var elementArr = split each element with ('/')
      var elementArr = currentGrades[i].split('/');
      // check each to see if elementArr[0] is the same as elementArr[1]
      if (elementArr[0] === elementArr[1]) { 
        // if so, continue
        continue;
      } else {
        // otherwise, perfectGrades = false
        perfectGrades = false
        break;
      }
    }
    // if perfectGrades, then add name to result arr
    if (perfectGrades) {
      result.push(key)
    }
  }
  // return result
  return result.sort();
}

console.log(whoPassed({
    "John" : ["5/5", "50/50", "10/10", "10/10"],
    "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
    "Adam" : ["8/10", "22/25", "3/5", "5/5"],
    "Barry" : ["3/3", "20/20"]
})); // ➞ ["Barry", "John"]
  
console.log(whoPassed({
    "Zara" : ["10/10"],
    "Kris" : ["30/30"],
    "Charlie" : ["100/100"],
    "Alex" : ["1/1"]
})); // ➞ ["Alex", "Charlie", "Kris", "Zara"]
  
console.log(whoPassed({
    "Zach" : ["10/10", "2/4"],
    "Fred" : ["7/9", "2/3"]
})); // ➞ []