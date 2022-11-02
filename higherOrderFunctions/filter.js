// mdn: The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

var x13sStorage = ['🛢️', '🔋', '🍪', '🛢️', '🔋', '🛢️', '🍪', '🍪'];

var onlyBatteries = x13sStorage.filter(function(element, index, array) {
    return x13sStorage[index] ===  '🔋'
});

console.log(onlyBatteries); // ['🔋', '🔋'];