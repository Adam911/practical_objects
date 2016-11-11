const assert = require ('assert');
var salesData = [{
  department: 'hardware',
  sales: 4500,
  day: 'Monday'
}, {
  department: 'outdoor',
  sales: 1500,
  day: 'Monday'
}, {
  department: 'carpentry',
  sales: 5500,
  day: 'Monday'
}, {
  department: 'hardware',
  sales: 7500,
  day: 'Tuesday'
}, {
  department: 'outdoor',
  sales: 2505,
  day: 'Tuesday'
}, {
  department: 'carpentry',
  sales: 1540,
  day: 'Tuesday'
}, {
  department: 'hardware',
  sales: 1500,
  day: 'Wednesday'
}, {
  department: 'outdoor',
  sales: 8507,
  day: 'Wednesday'
}, {
  department: 'carpentry',
  sales: 8009,
  day: 'Wednesday'
}, {
  department: 'hardware',
  sales: 12000,
  day: 'Thursday'
}, {
  department: 'outdoor',
  sales: 18007,
  day: 'Thursday'
}, {
  department: 'carpentry',
  sales: 6109,
  day: 'Thursday'
}, {
  department: 'hardware',
  sales: 7005,
  day: 'Friday'
}, {
  department: 'outdoor',
  sales: 12006,
  day: 'Friday'
}, {
  department: 'carpentry',
  sales: 16109,
  day: 'Friday'
}, ];

function mostProfitableDepartment(salesList) {
  //group by department`
  var salesForEachDepartment = {};


  //loop through all the sales
  for (var i = 0; i < salesList.length; i++) {
    //salesForEachDepartment += salesList[i];

    var deptDailySale = salesList[i];

    //check if the current department is in the salesForEachDepartment map
    if (salesForEachDepartment[deptDailySale.department] === undefined) {
      salesForEachDepartment[deptDailySale.department] = 0;
    }

    salesForEachDepartment[deptDailySale.department] += deptDailySale.sales;
    //deptDailySale.department
    //if ()
  }
  var depHighestProfit = {
    department: '',
    sales: 0
  };
  for (var departmentHolding in salesForEachDepartment) {
    if (salesForEachDepartment[departmentHolding] > depHighestProfit.sales) {
      depHighestProfit.department = departmentHolding;
      depHighestProfit.sales = salesForEachDepartment[departmentHolding]
    }
  }
  console.log(depHighestProfit);
}
mostProfitableDepartment(salesData);
