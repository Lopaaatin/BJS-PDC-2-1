"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let discr = (b ** 2) - 4*a*c;

  if (discr === 0) {
    arr[0] = (-b/(2*a));
  } else if (discr > 0) {
    arr[0] = (-b + Math.sqrt(discr))/(2*a);
    arr[1] = (-b - Math.sqrt(discr))/(2*a);
  } 
   return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  percent = +percent;
  contribution = +contribution;
  amount = +amount;

  if (typeof percent !== 'number') {
    totalAmount = 'Параметр <percent> содержит неправильное значение <значение параметра>';
  } else if (typeof contribution !== 'number') {
    totalAmount = 'Параметр <contribution> содержит неправильное значение <значение параметра>';
  } else if (typeof amount !== 'number') {
    totalAmount = 'Параметр <amount> содержит неправильное значение <значение параметра>';
  } else if ((typeof percent === 'number') && (typeof contribution === 'number') && (typeof amount === 'number')) {
  let creditBody = amount - contribution;
  let period = ((Date.parse(date) - Date.now())*12)/(1000*60*60*24*365);
  let eachMonthPercent = percent/(12*100);
  let eachMonthPayment = creditBody * (eachMonthPercent + (eachMonthPercent / (((1 + eachMonthPercent) ** period) - 1)));
  totalAmount = (Math.floor((period * eachMonthPayment)*100))/100;
  console.log(totalAmount);
  }

  return totalAmount;
}
