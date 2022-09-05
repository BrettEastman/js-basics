// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.

// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

// All wines will be different prices, so there is no confusion in the ordering.

function chosenWine(wines) {
  if (wines.length === 0) {
    return null;
  } else if (wines.length === 1) {
    return wines[0].name;
  }
  // create allPrices arr
  var allPrices = []
  // use for loop to iterate over array
  for (var i = 0; i < wines.length; i++) {
    // push the prices into the prices arr
    allPrices.push(wines[i].price);
  }
  // sort the prices from lowest to highest
  var sortedPrices = allPrices.sort(function (a, b) {return a - b;});
  console.log(sortedPrices);
  for (var j = 0; j < wines.length; j++) {
    // if wines.price === allPrices[1]
    if (wines[j].price === sortedPrices[1]) {
      return wines[j].name
    }
  }
}

console.log(chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
])); // ➞ "Wine 9"

console.log(chosenWine([{ name: "Wine A", price: 8.99 }])); // ➞ "Wine A"

console.log(chosenWine([])); // ➞ null