// mdn: The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// HR quiz example:
var githubStickers = [
  {
    name: "Octocat",
    qty: 12
  },
  {
    name: "Luchadortocat",
    qty: 2
  },
  {
    name: "Gracehoppertocat",
    qty: 5
  }
]

var hofFunction = function(array) {
  return githubStickers.filter(function(item, i, collection) {
    if (item.qty < 5) {
      return item;
    }
  });
}

console.log(hofFunction(githubStickers));

// other example:
var x13sStorage = ['🛢️', '🔋', '🍪', '🛢️', '🔋', '🛢️', '🍪', '🍪'];

var onlyBatteries = x13sStorage.filter(function(element, index, array) {
    return x13sStorage[index] ===  '🔋'
});

console.log(onlyBatteries); // ['🔋', '🔋'];