// You will be given an object with various consumer products and their respective prices. Return a list of the products with a minimum price of 500 in descending order.

function products(r) {
    // create resultArr
    var result = [];
    // use for in loop to access each property
    for (key in r) {
      // if the prop key is greater than 500
      if (r[key] >= 500) {
        // add the prop to the array
        result.push(key);
      }
    }
    // return resultArr
    return result;
}

console.log(products({"Computer" : 600, "TV" : 800, "Radio" : 50})); // ➞ ["TV","Computer"]

console.log(products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501})); // ➞ ["Bike1", "Bike3"]) 

console.log(products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20})); // ➞ []