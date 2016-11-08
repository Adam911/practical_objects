const assert = require('assert');

var salesData = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},];

var totalSalesMonday = 0;
var totalSalesTuesday = 0;
var totalSalesWednesday = 0;
var totalSalesThursday = 0;
var totalSalesFriday = 0;


function mostProfitableDay(profitableDay){
 for (var i = 0; i < profitableDay.length; i++) {
    var salesDays= profitableDay[i][2];
    var salesTotal = profitableDay[i][1]
   if (profitableDay === 'Monday') {
    totalSalesMonday +=  salesTotal;
   }
   else if (profitableDay === "Tuesday" ) {
     totalSalesTuesday += salesTotal;
   }
   else if (profitableDay === "Wednesday") {
     totalSalesWednesday += salesTotal;
   }
   else if (profitableDay === "Thursday") {
     totalSalesThursday += salesTotal;
   }
   else if (profitableDay === "Friday") {
     totalSalesFriday += salesTotal;
   }
 }
 if (totalSalesMonday > (totalSalesTuesday && totalSalesWednesday &&
  totalSalesThursday && totalSalesFriday)) {
    console.log('Monday is the most profitable day in the week');
}
else if (totalSalesTuesday > (totalSalesMonday && totalSalesWednesday &&
 totalSalesThursday && totalSalesFriday)) {
  console.log('Tuesday is the most profitable day in the week');
}
else if (totalSalesWednesday >(totalSalesMonday && totalSalesTuesday &&
 totalSalesThursday && totalSalesFriday)) {
  console.log('Wednesday is the most profitable day in the week');
}
else if (totalSalesThursday > (totalSalesMonday && totalSalesTuesday &&
 totalSalesWednesday && totalSalesFriday)) {
   console.log('Thursday is the most profitable day in the week');
}
else {
  console.log('Friday is the most profitble day in the week');
}
}
mostProfitableDay(salesData);
assert.deepEqual(mostProfitableDay,'Thursday is the most profitable day in the week');
