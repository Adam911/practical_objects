const assert = require ('assert');

var itemList = [
    {name : 'apples', price : 10},
    {name : 'pears', price : 37},
    {name : 'bananas', price : 27},
    {name : 'apples', price : 3},
];
function findItemsOver(namePrice, threshold) {
  var comparedPrice = [];
  for (var i = 0; i < namePrice.length; i++) {
    var objAttr = namePrice[i];
    var thePriceObj = objAttr.price

    if (thePriceObj > threshold) {
      comparedPrice.push(objAttr)
    }
  }
  return comparedPrice;
  }
  console.log(findItemsOver(itemList, 9));
  assert.deepEqual(findItemsOver(itemList, 9), [ {
    name: 'apples',
    price: 10
  }, {
    name: 'pears',
    price: 37
  }, {
    name: 'bananas',
    price: 27
  } ] )
