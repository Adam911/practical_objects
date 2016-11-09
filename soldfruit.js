var fruitString = 'Banana,Banana,Pear,Orange,Apple,Melon,Grape,Apple,Banana,Grape,Melon,Grape,Melon,Apple,Grape,Banana,Orange,Melon,Orange,Banana,Banana,Orange,Pear,Grape,Orange,Orange,Apple,Apple,Banana'

var fruitList = fruitString.split(',')
var fruitMap = {};
var high = 0;

   function soldfruits(){
    for (var i = 0; i < fruitList.length; i++) {
        var currentFruit = fruitList[i]
    if (fruitMap[currentFruit] === undefined) {
         fruitMap[currentFruit]= 0;
        }
        fruitMap[currentFruit] = fruitMap[currentFruit] +1
    }
    console.log(fruitMap);
}


soldfruits(fruitMap);

for (var fruits in fruitMap) {
  if (fruitMap[fruits] > high ) {
    high = fruitMap[fruits]
  }
}
console.log(high);
