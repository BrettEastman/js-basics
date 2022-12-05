//TRANSFORMS ARRAY INTO STRING

//.join() method can join together the elements of an array into a string with the joiner of your choice. For example, if you want to join everything together into one string like a word, you can join with “” as the argument.

function applyJoin(arrayOfStrings, string) {
  // create a joinedString variable
  // assign it to a string which is all of the strings in the input array separated by the input string
  var joinedString = arrayOfStrings.join(string);
  // return the joinedString variable
  return joinedString;
}

var resultString1 = applyJoin(['first', 'second', 'third'], '--');
console.log('should log joined string:', resultString1);
// --> first--second--third

var resultString2 = applyJoin(['git', 'commit'], ' ');
console.log('should also log joined string:', resultString2);
// --> git commit