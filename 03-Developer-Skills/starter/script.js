//℃
const printForecast = function (arr) {
  let tempString = '';

  for (let i = 0; i < arr.length; i++) {
    tempString += ` ... ${arr[i]}℃ in ${i + 1} days`;
  }

  return tempString;
};

console.log(printForecast([17, 21, 23]));
