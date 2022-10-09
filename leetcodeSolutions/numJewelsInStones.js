// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A"

// my version:
var numJewelsInStones = function(jewels, stones) {
    // make arrs of params
    let jewelsArr = jewels.split('');
    let stonesArr = stones.split('');
    let jewelsCount = 0;
    // loop through stonesArr
    for (let i = 0; i < stonesArr.length; i++) {
        // loop through jewelsArr to check whether each is in stonesArr
        for (let j = 0; j < jewelsArr.length; j++) {
            if (jewelsArr[j] === stonesArr[i]) {
                // if so, add one to jewels count
                jewelsCount++;
            }
        }
    }       
    // return jewels count
    return jewelsCount;
};

jewels = "aA", stones = "aAAbbbb"
// --> Output: 3

// best solution:
const numJewelsInStones = (J, S) => {
    const jewels = new Set(J)
    return S.split('').reduce((res, s) => res + jewels.has(s), 0)
};