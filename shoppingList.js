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
  /*The var totCost is zero because
  when it is counted it must start counting
  from there until it reaches its desired output.
  */
  var totCost = 0;
/*the variable i is assigned to start at zero in the
array.Then the itemList is parameter for the loop
to run in.Then the price is taken from
*/
  for (var i = 0; i < itemList.length; i++) {
    /*The desired outcome from the for loop
    is put into the itemList parameter.
    */
      obj = itemList[i];
      /* and then it is stored inside the obj variable
      after it is assigned to a new variable to
      access the price (key) value.
      */
      itemPrices = obj.price;
//The totCost is equal and is gathered with
//the others within the array.
  totCost += itemPrices
  }
  //The argument is set into a console.log().And
  //diretly return after.
  console.log('The following total costs of shopping for both lists are R'+totCost);
  return totCost;
}
//Test it with the desired output needed firstly
//with function name then with the array assigned
// its too.
assert.equal(shoppingList(shoppingList1),37.50);
assert.equal(shoppingList(shoppingList2),58);
