const assert = require('assert');


var shoppingList = [{
  itemName: 'Bread',
  price: 11.00
}, {
  itemName: 'Milk',
  price: 7.00
}, {
  itemName: 'Bread',
  price: 19.50
}];

console.log('ShoppingList: ');
for (var i = 0; i < shoppingList.length; i++) {
  var listItems = shoppingList[i];
  assert.equal(listItems.itemName +  " @ " + listItems.price);

  console.log(listItems.itemName +  " @ " +  listItems.price);

}
