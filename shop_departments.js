const assert = require('assert')

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

var totalDepartmentHardware = 0;
var totalDepartmentOutdoor = 0;
var totalDepartmentCarpentry = 0;

function mostProfitableDepartment(depList) {
  for (var i = 0; i < depList.length; i++) {
    var sortdDep = depList[i]
    if (sortdDep === 'hardware' && sortdDep > ) {

    }
    else if (sortdDep === 'carpentry') {

    }
    else if (sortdDep === 'outdoor') {

    }
  }
  return sortdDep;
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
