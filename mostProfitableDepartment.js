const assert = require('assert');

var totalDepOutdoorSales = 0 ;
var totalDepCarpentrySales = 0;
var totalDepHardwareSales = 0;

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
    {department : 'carpentry', sales : 16109, day : 'Friday'},
];


function mostProfitableDepartment(depList) {
  for (var i = 0; i < depList.length; i++) {
      var departmentName = depList[i][0];
      var departSales = depList[i][1];
        /*Now looking for each name in the loop and assigning it to the variable and its sales key
           (adding its keys together) to the total Department sales variable.
      */
  if (departmentName === 'carpentry') {
    totalDepCarpentrySales =+ departSales;
  }
  else if (departmentName === 'outdoor') {
    totalDepOutdoorSales =+ departSales;
  }
  else if (departmentName === 'hardware') {
    totalDepHardwareSales =+ departSales;
  }
}//Now checking if the
 if (totalDepCarpentrySales > totalDepHardwareSales && totalDepCarpentrySales > totalDepOutdoorSales) {
  console.log('Carpentry is the most profitable department');
 }
 else if (totalDepOutdoorSales > totalDepCarpentrySales && totalDepOutdoorSales > totalDepHardwareSales) {
  console.log('Outdoor is the most profitable department');
 }
 else {
   console.log('Hardware is the most profitable department');
 }
}
mostProfitableDepartment(salesData);

assert.equal(mostProfitableDepartment,'Hardware is the most profitable department');


/*
A local shop want some help to
determine which of their departments are
the most profitable and which day of the
week is the most profitable. Write two
functions called mostProfitableDepartment,
mostProfitableDay to help them to answer
these questions
*/