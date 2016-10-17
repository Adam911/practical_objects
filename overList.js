const assert = require('assert');

var itemList = [
    {name : 'apples', price : 10},
    {name : 'pears', price : 37},
    {name : 'bananas', price : 27},
    {name : 'apples', price : 3},
];


function findItemsOver20(list, threshold) {
    var over20 = [];

    for (var i = 0; i < list.length; i++) {
        var listName = list[i];
        var price = listName.price;

        if (list[i].price > threshold) {
            over20.push({
                'Item': listName
            });
        }
    }

    return over20;
};

//Test function
//test variables saves output of function
var listOne = findItemsOver20(itemList, 20);
//compare the output

console.log(findItemsOver20(itemList, 20));




/*
Write a function called findItemsOver20
 that takes a list of objects,
 each object having 2 attributes one called
 name and the other price. The function should
 return all the products
that have a price more than R20.
*/
