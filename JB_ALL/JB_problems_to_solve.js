// PROBLEMS TO SOLVE FROM JULIE:

const data = {
  cities: [{
      paris: {
          average: '65.3',
          high: '91.1',
          low: '18.4'
      }
  }, {
      london: {
          average: '62.0',
          high: '88.9',
          low: '6.2'
      }
  }, {
      cairo: {
          average: '82.4',
          high: '107.5',
          low: '44.6'
      }
  }]

}
// 1) find the average for all cities

// input: object with one property, cities, which is an array of objects, one for each city. Each city property contains an object with three properties, average, high, and low

// output: number(average for all cities)

//FUNCTION:
// my solution in Sept:
function averageForAll(object) {
  // create tempsArr
  var tempsArr = [];
  // access temp of each city and add it, as a number, to the tempsArr
  var citiesArr = data.cities;
  for (var i = 0; i < citiesArr.length; i++) {
    var currentCityObj = citiesArr[i]
    var currCity;
    for (key in currentCityObj) {
      if (currentCityObj[currCity] === undefined) {
        currCity = key;
      }
    }
    tempsArr.push(Number(currentCityObj[currCity].average))
    // console.log(tempsArr)
  }
  // get average through adding values and dividing by tempsArr length
  var sum = 0;
  for (var j = 0; j < tempsArr.length; j++) {
    sum += tempsArr[j];
  }
  return sum / tempsArr.length;
}

// my solution in Aug:
function averageForAll(object) {
//create temperature array
var temperature = [];
//access the main object
for (key in object) {
  //create variable for main object property,'cities' which is an array
  var objArr = object[key]
  //iterate through the array
  for (var i = 0; i < objArr.length; i++) {
    //create variable for current array index(current object)
    var cityObj = objArr[i];
    //access the inner object property
    for (key in cityObj) {
      var currentCity = cityObj[key];
      var currentAveTemp = currentCity['average']
      temperature.push(Number(currentAveTemp));       
    }
  }
}
var tempSum = 0;
for (var j = 0; j < temperature.length; j++) {
  tempSum += temperature[j];
}
return (tempSum / temperature.length);
}

console.log(averageForAll(data));
// --> 69.89999999999999 

// 2) find the lowest temperature

//FUNCTION:
function lowestTemp(object) {
//create lowest temperature array
var lowestArr = [];
//access the main object
for (key in object) {
  var objArr = object[key]
  for (var i = 0; i < objArr.length; i++) {
    var cityObj = objArr[i];
    for (key in cityObj) {
      var currentCity = cityObj[key];
      var lowTemp = currentCity['low']
      lowestArr.push(Number(lowTemp));       
    }
  }
}
var lowestTemp = lowestArr[0];
for (var j = 1; j < lowestArr.length; j++) {
  if (lowestArr[j] < lowestTemp) {
    lowestTemp = lowestArr[j];
  }
}
return lowestTemp;
}

console.log(lowestTemp(data));
// --> 6.2


// 3) find the highest temperature

//FUNCTION:
function highestTemp(object) {
//create lowest temperature array
var highestArr = [];
//access the main object
for (key in object) {
  var objArr = object[key]
  for (var i = 0; i < objArr.length; i++) {
    var cityObj = objArr[i];
    for (key in cityObj) {
      var currentCity = cityObj[key];
      var highTemp = currentCity['high']
      highestArr.push(Number(highTemp));       
    }
  }
}
var lowestTemp = highestArr[0];
for (var j = 1; j < highestArr.length; j++) {
  if (highestArr[j] > highTemp) {
    highTemp = highestArr[j];
  }
}
return highTemp;
}

console.log(highestTemp(data));
// --> 107.5 


// 4) return a new object with the same data shape but with all temperatures converted to celsius (look up the formula) (32°F − 32) × 5/9 = 0°C

//FUNCTION:
function convertAllTempsToCelcius(object) {
for (key in object) {
  var objectArray = object[key];
  for (var i = 0; i < objectArray.length; i++) {
    var currentCityObj = objectArray[i];
    for (key in currentCityObj) {
      var currentCity = currentCityObj[key];
      currentCity['average'] = convertToCel(currentCity['average']);
      currentCity['high'] = convertToCel(currentCity['high']);
      currentCity['low'] = convertToCel(currentCity['low']);
    }
  }
}
return object;
}

//helper function:
function convertToCel(stringNum) {
var num = Number(stringNum);
var celNum = (num - 32) * (5 / 9);
var stringCel = celNum.toString();
return stringCel;
}

console.log(convertAllTempsToCelcius(data));