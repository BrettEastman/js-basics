//HACK REACTOR CODING CHALLENGE:

//We want you to write a function, organizeItems, that organizes items by category. The argument to the function is an array of item objects. Each item object has 3 properties, category (string), itemName (string), and onSale (Boolean).
//items having onSale set to true should have '($)' appended to their item name.

// my first version
function organizeItems(items) {
  //create a result object with properties for each of the categories in 'items'
  var resultObj = {};
  for (var i = 0; i < items.length; i++) {
    var currentObj = items[i];
    var currentCategory = currentObj.category;
    if (resultObj[currentCategory] === undefined) {
      resultObj[currentCategory] = [];
    }
    if (currentObj.onSale) {
      resultObj[currentCategory].push(currentObj.itemName + "($)");
    } else {
      resultObj[currentCategory].push(currentObj.itemName);
    }
  }
  return resultObj;
}

// my second attempt on Aug 21
function organizeItems(items) {
  //create a result object with properties for each of the categories in 'items'
  var resultObj = {"fruit": [], "canned": [], "frozen": []}
  //iterate through the array
  for (var i = 0; i < items.length; i++) {
    //create currentObj variable
    var currentObj = items[i];
    //create currentObjCategory variable
    var currentCategory = currentObj.category;
    var currentItem = currentObj.itemName;
    //for each object, if the item is onSale
    if (currentObj.onSale === true) {
      //add itemName to the resultObj category array + ($)
      resultObj[currentCategory].push(currentItem + '($)')
    } else {
      //otherwise just add itemName as is
      resultObj[currentCategory].push(currentItem);
    }
  }
  //return the result object
  return resultObj;
}


//Test cases:
var itemData = [
  { category: 'fruit',  itemName: 'apple', onSale: false },
  { category: 'canned', itemName: 'beans', onSale: false },
  { category: 'canned', itemName: 'corn',  onSale: true  },
  { category: 'frozen', itemName: 'pizza', onSale: false },
  { category: 'fruit',  itemName: 'melon', onSale: true  },
  { category: 'canned', itemName: 'soup',  onSale: false },
];

var example = {
  fruit:  ['apple', 'melon($)'],
  canned: ['beans', 'corn($)', 'soup'],
  frozen: ['pizza']
};

console.log(organizeItems(itemData));