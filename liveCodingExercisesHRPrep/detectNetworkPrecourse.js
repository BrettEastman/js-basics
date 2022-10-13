//first edition:
var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var c = cardNumber;
  if (c.length === 14 && (c.slice(0,2) === '38' || c.slice(0,2) === '39')) {
    return 'Diner\'s Club';
  } else if (c.length === 15 && (c.slice(0,2) === '34' || c.slice(0,2) === '37')) {
    return 'American Express';
  } else {
    return undefined;
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};

console.log(detectNetwork('38345678901234'));

//second edition:
var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  var c = cardNumber;
  var cLen = c.length;
  var cPre = c.slice(0, 2);
  var mPre = ['51', '52', '53', '54', '55'];
  if (cLen === 14 && (cPre === '38' || cPre === '39')) {
    return 'Diner\'s Club';
  } else if (cLen === 15 && (cPre === '34' || cPre === '37')) {
    return 'American Express';
  } else if ((cLen === 13 || cLen === 16 || cLen === 19) && cPre[0] === '4') {
    return 'Visa';
  } else if (cLen === 16 && mPre.indexOf(cPre) !== -1) {
    return 'MasterCard';
  } else {
    return undefined;
  }
};

console.log(detectNetwork('4123456789012'));

// third edition:
var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  var c = cardNumber;
  var cLen = c.length;
  var cPre = c.slice(0, 2);
  var mcPre = ['51', '52', '53', '54', '55'];
  var discPre = ['65', '644', '645', '646', '647', '648', '649', '6011'];
  var maesPre = ['5018', '5020', '5038', '6304'];
  var maesLen = ['12', '13', '14', '15', '16', '17', '18', '19'];
  var discPreCorrect = false;
  for (var i = 0; i < discPre.length; i++) {
    var discPreLen = discPre[i].length;
    if (c.slice(0, discPreLen) === discPre[i]) {
      discPreCorrect = true;
    }
  }
  if (cLen === 14 && (cPre === '38' || cPre === '39')) {
    return 'Diner\'s Club';
  } else if (cLen === 15 && (cPre === '34' || cPre === '37')) {
    return 'American Express';
  } else if ((cLen === 13 || cLen === 16 || cLen === 19) && cPre[0] === '4') {
    return 'Visa';
  } else if (cLen === 16 && mcPre.indexOf(cPre) !== -1) {
    return 'MasterCard';
  } else if (maesLen.indexOf(cLen.toString()) !== -1 && maesPre.indexOf(c.slice(0, 4)) !== -1) {
    return 'Maestro';
  } else if ((cLen === 16 || cLen === 19) && discPreCorrect === true) {
    return 'Discover';
  } else {
    return undefined;
  }
};

//fourth version:
var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // China UnionPay always has a prefix of 622126-622925,
  // 624-626, or 6282-6288 and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182,
  // 633110, 6333, or 6759 and a length of 16, 18, or 19.
  var c = cardNumber;
  var cLen = c.length;
  var cPre = c.slice(0, 2);
  var mcPre = ['51', '52', '53', '54', '55'];
  var discPre = ['65', '644', '645', '646', '647', '648', '649', '6011'];
  var maesPre = ['5018', '5020', '5038', '6304'];
  var maesLen = ['12', '13', '14', '15', '16', '17', '18', '19'];
  var cupLen = ['16', '17', '18', '19'];
  var switchPre = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  var cupPre = ['624', '625', '626', '6282', '6283', '6284', '6285', '6286', '6287', '6288'];
  var switchPreCorrect = false;
  for (var i = 0; i < switchPre.length; i++) {
    var switchPreLen = switchPre[i].length;
    if (c.slice(0, switchPreLen) === switchPre[i]) {
      switchPreCorrect = true;
    }
  }
  var discPreCorrect = false;
  for (var j = 0; j < discPre.length; j++) {
    var discPreLen = discPre[j].length;
    if (c.slice(0, discPreLen) === discPre[j]) {
      discPreCorrect = true;
    }
  }
  var cupPreCorrect = false;
  var cupPre = ['624', '625', '626', '6282', '6283', '6284', '6285', '6286', '6287', '6288'];
  for (var k = 0; k < cupPre.length; k++) {
    var cupPreLen = cupPre[k].length;
    if (c.slice(0, cupPreLen) === cupPre[k]) {
      cupPreCorrect = true;
    }
  }
  for (var pre = 622126; pre <= 622925; pre++) {
    if ((c.slice(0, 6) === pre.toString())) {
      cupPreCorrect = true;
    }
  }
  if (cLen === 14 && (cPre === '38' || cPre === '39')) {
    return 'Diner\'s Club';
  } else if (cLen === 15 && (cPre === '34' || cPre === '37')) {
    return 'American Express';
  } else if ((cLen === 16 || cLen === 18 || cLen === 19) && switchPreCorrect === true) {
    return 'Switch';
  } else if ((cLen === 13 || cLen === 16 || cLen === 19) && cPre[0] === '4') {
    return 'Visa';
  } else if (cLen === 16 && mcPre.indexOf(cPre) !== -1) {
    return 'MasterCard';
  } else if (maesLen.indexOf(cLen.toString()) !== -1 && maesPre.indexOf(c.slice(0, 4)) !== -1) {
    return 'Maestro';
  } else if ((cLen === 16 || cLen === 19) && discPreCorrect === true) {
    return 'Discover';
  } else if (cupLen.indexOf(cLen.toString()) !== -1 && cupPreCorrect === true) {
    return 'China UnionPay';
  } else {
    return undefined;
  }
};
