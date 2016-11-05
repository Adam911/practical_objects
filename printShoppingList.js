
var shoppingList = [
    { itemName : '*Bread', price : 11.00 },
    { itemName : '*Milk', price : 7.00 },
    { itemName : '*Bread', price : 19.50 }
];

function printShoppingList(itemName) {
console.log("Shopping List: ");
  for (var i = 0; i < itemName.length; i++) {
    var listItems = itemName[i];

    console.log(listItems.itemName +' @'+ " R " +listItems.price);
  }
  return listItems;
}
var objItems = printShoppingList(shoppingList)
