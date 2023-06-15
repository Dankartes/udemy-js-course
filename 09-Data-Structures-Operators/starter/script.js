'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const buttonElement = document.querySelector('button');
const textElement = document.querySelector('textarea');

buttonElement.addEventListener('click', () => {
  let data = textElement.value;

  data = data.split('\n');

  const newData = [];

  for (let [rpt, element] of data.entries()) {
    element = element.trim().toLowerCase();
    const index = element.indexOf('_');

    const newElement =
      element.slice(0, index) +
      element[index + 1].toUpperCase() +
      element.slice(index + 2, element.length);

      console.log(`${newElement.padEnd(20)} ${'✔'.repeat(rpt + 1)}`);

    newData.push(newElement);
  }

  //console.log(newData);
});

// const message2 = 'Bad weather... i wabnt to dbie';

// console.log(message2.repeat(5));

// const planesInLine = (n) => {
//   console.log(`There are ${n} planes in line ${'P'.repeat(n)}.`);
// }

// planesInLine(8);

// console.log('a+very+nice+string'.split('+'));
// console.log('Stancu Robert'.split(' '));

// const [firstName, lastName] = 'Stancu Robert'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const passenger = 'jessica ann smith davis';

// const capitalize = name => {
//   const names = name.split(' ');

//   const arr = [];

//   for (const n of names) {
//     arr.push(n.replace(n[0], n[0].toUpperCase()));
//   }

//   console.log(arr);
// };

// capitalize(passenger);

// const airline = 'TAP Air Portugal';
// const plane1 = 'A320';

// const priceGB = '288,97L';

// // const priceUS = priceGB.replace('L', '$').replace(',', '.');
// // console.log(priceUS);

// // const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// // // console.log(announcement.replaceAll('door', 'gate'));
// // console.log(announcement.replace(/door/g, 'gate'));

// const plane2 = 'Airbus A320neo';

// const checkBaggage = function(items) {

//   const baggage = items.toLowerCase();

// if(baggage.includes('knife') || baggage.includes('gun'))
// console.log('ilegal');
// else console.log('extra legal');

// };

// checkBaggage('I have a laptop, some food, and a fucking Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// const checkMiddleSeat = function (seat) {
//   //B, E middle seats

//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('middle seat');
//   else console.log('good seat');
// };

// const email = 'hello@jonas.io';

// const loginEmail = prompt('Enter email:');

// const normEmail = loginEmail.toLowerCase().trim();

// console.log(normEmail === email);
