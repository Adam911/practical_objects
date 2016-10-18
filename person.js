var shoppingList = [
    { itemName : 'Milk 500ml', qty : 2},
    { itemName : 'Bread', qty : 1},
    { itemName : 'Rolls', qty : 6},
    { itemName : 'Fanta 1L', qty : 2},
];

//add a new object to a list like this
shoppingList.push({
    itemName : 'Coke 1L',
    qty : 3});

// or like this

var barOne = {
    itemName : 'Bar One',
    qty : 3};

shoppingList.push(barOne);

console.log('Shopping list: ');

for(var i=0;i<shoppingList.length;i++){
    var listItem = shoppingList[i];
    console.log(listItem.itemName + " " + listItem.qty);
}
