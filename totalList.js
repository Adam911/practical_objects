const assert = require('assert');

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

var shoppingList3 = [
    { itemName : 'Maize Meal', price : 22.00 },
    { itemName : 'Bread', price : 12.50 },
    { itemName : 'Eggs', price : 9.00 },
    { itemName : '2L Coke', price : 19.00 },
    { itemName : 'Bread', price : 16.50 }
];
 var priceNum = 0;
function shoppingList1(name, price) {
  for (var i = 0; i < shoppingList1.length; i++) {
    var priceTotal1 = shoppingList[i]
    console.log(priceTotal1(shoppingList1[0]));
  }
}
