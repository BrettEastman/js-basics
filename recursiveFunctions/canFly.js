// My final, correct version:
var listAllFlyingBots = function(bot) {
  var arr = [];
  if (bot.canFly) {
      arr = arr.concat(bot.name);
  }
  if (bot.friends.length > 0) {
      bot.friends.filter(function(item) {
          arr = arr.concat(listAllFlyingBots(item));
      });
  }
  // return arr of unique values
  return arr.filter(function(element, index) {
      return arr.indexOf(element) === index;
  });
};

// My second version:
// var listAllFlyingBots = function(bot) {
//     var arr = [];
//     if (bot.canFly) {
//         arr = arr.concat(bot.name);
//     }
//     if (bot.friends.length > 0) {
//         bot.friends.forEach(function(item) {
//             var currentArr = listAllFlyingBots(item);
//             for (var i = 0; i < arr.length; i++) {
//                 if (currentArr.indexOf(arr[i]) === -1) {
//                     arr = arr.concat(listAllFlyingBots(item));
//                 }

//             }

//         });
//     }
//     // return arr of unique values
//     return arr;
// };

// My first version:
// var listAllFlyingBots = function(bot) {
//     var arr = [];
//     if (bot.canFly) {
//         arr = arr.concat(bot.name);
//     }
//     if (bot.friends.length > 0) {
//         bot.friends.forEach(function(item) {
//             arr = arr.concat(listAllFlyingBots(item));
//         });
//     }
//     // return arr of unique values
//     return arr;
// };

var bot = {
  name: 'karvis',
  canFly: false,
  canCook: true,
  canSpeak: true,
  yearsInspected: [2008, 2010, 2013],
  fueledBy: 'money',
  bestFriend: 'jcn',
  friends: [
      {
          name: 'r2d3',
          canFly: true,
          canCook: true,
          canSpeak: false,
          yearsInspected: [1968, 2001],
          fueledBy: 'cosmic energy',
          bestFriend: 'jcn',
          friends: []
      }
  ]
};

console.log(JSON.stringify(listAllFlyingBots(bot), null, 2));