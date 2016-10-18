const assert = require('assert');
//the price for each item
var shoppingList1 = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
];

var shoppingList2 = [
    { itemName : 'Apples', price : 7.50 },
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 23.00 },
    { itemName : 'Bread', price : 9.50 }
];

function shoppingList(itemList) {
  //initailizing my variable
  var totCost = 0;
//When i is = to zero that means that the for loop
//Starts at the number 0 in the array.It starts looping from there.
  for (var i = 0; i < itemList.length; i++) {

      obj = itemList[i];
      itemPrices = obj.price;

  totCost += itemPrices
  }
  console.log(totCost);
  return totCost;
}
//You test the function by putting in first the
//name and then the pa
assert.equal(shoppingList(shoppingList2),37.50);
