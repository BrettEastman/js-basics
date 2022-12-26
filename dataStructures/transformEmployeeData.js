//Write a function called "transformEmployeeData" that transforms some employee data from one format to another. In this case, we are transforming an Array of Arrays with nested Arrays into an Array of Objects with the key value pairs formed from the arrays within the arrays.

//my version from July 2022:
function transformEmployeeData(employeeData) {
  var arrayOfObj = [];
  for (var i = 0; i < employeeData.length; i++) {
      var currentObj = {};
      var currentIndex = employeeData[i];
      for (var j = 0; j < currentIndex.length; j++) {
          var nested = currentIndex[j]
          currentObj[nested[0]] = nested[1];
      }
      arrayOfObj.push(currentObj);
  }
  return arrayOfObj;
}

//MY VERSION from May 2022:
function transformEmployeeData(employeeData) {
  var arrOfObj = [];
  for(i=0;i<employeeData.length;i++) {
    var obj = {};
    for(j=0;j<employeeData[i].length;j++) {
      var key = employeeData[i][j][0];
      var value = employeeData[i][j][1];
      obj[key] = value;
    }
    arrOfObj.push(obj);
  }
  return arrOfObj;
}

var employeeData = [
    [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
    [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]
];

var output = transformEmployeeData(employeeData);
console.log(output); // --> [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},{firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]


//HIS VERSION:
function transformEmployeeData(employeeData) {
  var container = [];

  for (var i = 0; i < employeeData.length; i++) {
    var personArray = employeeData[i];
    var personObject = {};
    for (var j = 0; j < personArray.length; j++) {
      //console.log(personArray[j]);
      var key = personArray[j][1];
      var value = personArray[j][1];
      personObject[key] = value;
    }
    container.push(personObject);
  }
  return container;
}