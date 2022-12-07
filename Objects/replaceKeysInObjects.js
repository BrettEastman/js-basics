var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
    if (key === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
    if (typeof key === 'object' && Array.isArray(key) !== true) {
      obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
    }
  }
  return obj;
};

var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
console.log(replaceKeysInObj(obj, 'y', 'X'));