// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

function sortDrinkByPrice(drinks) {
  // create outputArr
  var outputArr = [];
  // create pricesArr
  var pricesArr = [];
  // iterate through the main arr to put all prices into pricesArray
  for (var i = 0; i < drinks.length; i++) {
    pricesArr.push(drinks[i].price);
  }
  // sort the prices in order
  pricesArr.sort((a, b) => a - b);
  // iterate again to put the objects in order of the prices
  for (var j = 0; j < pricesArr.length; j++) {
    for (var k = 0; k < drinks.length; k++) {
      if (drinks[k].price === pricesArr[j]) {
        outputArr.push(drinks[k]);
      }
    }
  }
  // return outputArr
  return outputArr;
}

drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]

console.log(sortDrinkByPrice(drinks)); // ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]