//Write the function detectNetwork. It should accept a string or a number for its cardNumber argument and, based on the provided cardData, return the appropriate network string (or undefined if there's no match).

//input: Two parameters - string or number, cardData array
//output: string - name of network

function detectNetwork(cardNumber, cardData) {
    //if cardNumber is number, convert cardNumber variable to string
    if (typeof cardNumber !== 'string') {
      cardNumber = cardNumber.toString();
    }
    var cardLength = cardNumber.length;
    var cardPre2 = cardNumber.slice(0, 2);
    var cardPre1 = cardNumber.slice(0, 1);
    //create sameLength empty array
    var sameLengthArr = [];
    //create samePrefix empty array
    var samePreArr = [];
    //iterate through array
    for (var i = 0; i < cardData.length; i++) {
      var currentIssuer = cardData[i]['issuer/network'];
      var currentPreArr = cardData[i].prefixes;
      var currentLengths = cardData[i].lengths;
      //for each object, check to see if cardNumber begins with one of the prefixes
        //if so, push to samePrefix array
      for (var j = 0; j < currentPreArr.length; j++) {
        if (currentPreArr[j] === cardPre2 || currentPreArr[j] === cardPre1) {
          samePreArr.push(currentIssuer);
        }
      }
      
      //for each object, check to see if cardNumber is the same as one of the available lengths
        //if so, push to sameLength array
      for (var k = 0; k < currentLengths.length; k++) {
        if (currentLengths[k] === cardLength) {
          sameLengthArr.push(currentIssuer);
        }
      }
    }
    //for the sameLength array
      //check to see if sameLength[i] is in samePrefix
        // if so, return it
    for (var l = 0; l < sameLengthArr.length; l++) {
      if (samePreArr.includes(sameLengthArr[l]) === true) {
        return sameLengthArr[l];
      }
    }
  }
  
  // TESTS:
  var cardData = [
    {
      'issuer/network': 'Visa',  // card issuer (network)
      prefixes: ['4'],	       // beginning digits
      lengths: [13, 16, 19]      // lengths of card numbers
    },
    {
      'issuer/network': 'Mastercard',
      prefixes: ['51', '52', '53', '54', '55'],
      lengths: [16]
    },
    {
      'issuer/network': 'American Express',
      prefixes: ['34', '37'],
      lengths: [15]
    },
    {
      'issuer/network': 'Diner\'s Club',
      prefixes: ['38', '39'],
      lengths: [14]
    }
  ];
  
  var network = detectNetwork('343456789012345', cardData);
  console.log(network); 
  // --> 'American Express'
  console.log(detectNetwork('4313234512343456', cardData))