// Create a function that takes an array of objects and calculate the total based on the quantity of items purchased. Apply a 6% sales tax for each item when appropriate.

const tax = .06

function checkout(cart) {
    // create a sum variable
    var sum = 0;
    // iterate over the cart array
    for (var i = 0; i < cart.length; i++) {
        // create currentObj var
        var currentObj = cart[i];
        // create currentSum
        var currentSum = 0;
        // access each to get prc * qty and add to currentSum
        var price = currentObj.prc * currentObj.qty;
        // if taxable, calculate tax
        if (currentObj.taxable) {
            // add tax to currentSum.
            price += price * tax;
        }
        sum += price;       
          // otherwise, just add to currentSum
    }
    return sum;  	
}

console.log(checkout([
    { desc: "potato chips", prc: 2, qty: 2, taxable: false },
    { desc: "soda", prc: 3, qty: 2, taxable: false },
    { desc: "paper plates", prc: 5, qty: 1, taxable: true }
  ])); //➞ 15.3