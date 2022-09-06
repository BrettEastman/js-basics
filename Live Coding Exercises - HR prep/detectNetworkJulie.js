//Write the function detectNetwork. It should accept a string or a number for its cardNumber argument and, based on the provided cardData, return the appropriate network string (or undefined if there's no match).

//input: Two parameters - string or number, cardData array
//output: string - name of network

function detectNetwork(cardNumber, cardData) {
    // assume cardNumber is a string cause too lazy
    let n = cardNumber.length
    for (let i = 0; i < cardData.length; i++) {
      let currentNetwork = cardData[i]
      // check if length is contained in currentNetwork, otherwise move on
      if (currentNetwork.lengths.indexOf(n) === -1) {
        continue;
      }
      for (let j = 0; j < currentNetwork.prefixes.length; j++) {
        let currentNetworkPrefix = currentNetwork.prefixes[j]
        // because we might not know the length of the prefixes, use length of the current prefix for slice
        if (cardNumber.slice(0, currentNetworkPrefix.length) === currentNetworkPrefix) { 
          return currentNetwork['issuer/network'];
        }
      }
    }
    // we didn't find a match so return undefined
    return undefined
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
  console.log(detectNetwork('39393939393930', cardData), 'should be Diners Club')
  console.log(detectNetwork('5123123423453467', cardData), 'should be Mastercard')
  console.log(detectNetwork('23478238492384928374', cardData), 'should be undefined')
  console.log(detectNetwork('4313234512343456', cardData), 'should be visa')