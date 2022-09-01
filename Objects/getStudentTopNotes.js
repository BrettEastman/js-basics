// Create a function that takes an array of students and returns an array of their top notes. If the student does not have notes then let's assume their top note is equal to 0.
// Alternatively use Math.max instead of Array.prototype.reduce.

// my solution:
function getStudentTopNotes(students) {
    // create result array
    var result = [];
    // iterate through the array
    for (var i = 0; i < students.length; i++) {
        // set currentObj variable
        var currentStudent = students[i];
        // access the notes for the current object and use Math.max to determine the greatest number and push it to result array
        var notesArr = currentStudent.notes;
        if (notesArr.length === 0) {
            result.push(0);
        } else {
            var highestNote = Math.max(...notesArr);
            result.push(highestNote);
        }
    } 
    return result;
}

// better solution:
function getStudentTopNotes(students) {
    return students.map(x => Math.max(...x.notes, 0))
}

console.log(getStudentTopNotes([
    {
      id: 1,
      name: "Jacek",
      notes: [5, 3, 4, 2, 5, 5]
    },
    {
      id: 2,
      name: "Ewa",
      notes: [2, 3, 3, 3, 2, 5]
    },
    {
      id: 3,
      name: "Zygmunt",
      notes: [2, 2, 4, 4, 3, 3]
    }
  ])); //➞ [5, 5, 4]