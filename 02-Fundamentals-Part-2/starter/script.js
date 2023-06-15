const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const calcAverage = function (arr) {
  let sum = NaN;
  for (let i = 0; i < arr.length; i++) sum += arr[i];

  return sum / arr.length;
};

// console.log(calcAverage([1,2,1,1]));
console.log(undefined + 2);

// for(let i = 0; i < bills.length; i++) {
//  tips.push(calcTip(bills[i]));

//  totals.push(bills[i] + tips[i]);

// }

// console.log(tips, totals);
