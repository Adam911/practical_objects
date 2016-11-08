const assert = require('assert');

var itemList = 
[{  name: 'guava',price: 3},
  {name: 'apples',price: 10},
  {name: 'pears',price: 37},
  {name: 'bananas', price: 27}, ];

function findItemsOver20(objList) {
  var objOver20 = [];

  for (var i = 0; i < objList.length; i++) {
    var listObj20 = objList[i];
    var thisPrice = listObj20.price

    if (thisPrice > 20) {
      // var objOf20 = thisPrice;
      objOver20.push(listObj20);
    }
  }
  console.log(objOver20);
  return objOver20;
}

assert.deepEqual(findItemsOver20(itemList), [{
  name: 'pears',
  price: 37
}, {
  name: 'bananas',
  price: 27
}])
/*
Write a function called findItemsOver20
 that takes a list of objects,
 each object having 2 attributes one called
 name and the other price. The function should
 return all the products
that have a price more than R20.
*/
