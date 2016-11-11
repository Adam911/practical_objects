
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

var dayForEachDepartment = {};

function mostProfitableDay(weekdays){
for (var i = 0; i < weekdays.length; i++) {

  var profitableDay = weekdays[i]

  if ( dayForEachDepartment[profitableDay.day] === undefined){
          dayForEachDepartment[profitableDay.day] = 0;
        }
dayForEachDepartment[profitableDay.day] += profitableDay.sales;
    }
  }
mostProfitableDay(salesData);
//ObjectMap holding the day's most sold on that specific day.
var daySoldMost ={
  day : '',
  sales: 0
};
for (var daysWithSales in dayForEachDepartment){
  if (dayForEachDepartment[daysWithSales] > daySoldMost.sales) {
    daySoldMost.day = daysWithSales;
    daySoldMost.sales = dayForEachDepartment[daysWithSales]
  }
}
console.log(daySoldMost);
