var totalDepOutdoorSales = 0;
var totalDepCarpentrySales= 0;
var totalDepHardwareSales= 0;

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
  if (depList[i].department === 'carpentry') {
    totalDepCarpentrySales =+ depList[i].sales;
  }
  if (depList[i].department === 'outdoor') {
    totalDepOutdoorSales =+ depList[i].sales
  }
  if (depList[i].department === 'hardware') {
    totalDepHardwareSales =+ depList[i].sales
  }
 }
 if (totalDepCarpentrySales > (totalDepHardwareSales && totalDepOutdoorSales)) {
  console.log('Carpentry is the most profitable department');
 }
 else if (totalDepOutdoorSales > (totalDepCarpentrySales && totalDepHardwareSales)) {
  console.log('Outdoor is the most profitable department');
 }
 else {
   console.log('Hardware is the most profitable department');
 }

}
mostProfitableDepartment(salesData);




/*
A local shop want some help to
determine which of their departments are
the most profitable and which day of the
week is the most profitable. Write two
functions called mostProfitableDepartment,
mostProfitableDay to help them to answer
these questions
*/
