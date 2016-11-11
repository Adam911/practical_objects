var fruitString = 'Banana,Banana,Pear,Orange,Apple,Melon,Grape,Apple,Banana,Grape,Melon,Grape,Melon,Apple,Grape,Banana,Orange,Melon,Orange,Banana,Banana,Orange,Pear,Grape,Orange,Orange,Apple,Apple,Banana'

var fruitList = fruitString.split(',')
var fruitMap = {};

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

for(var fruit in fruitMap){
    console.log(fruit);
}
