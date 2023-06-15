'use strict';

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function(str, fn) {

//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
// console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the bomb!', upperFirstWord);

// const high5 = function() {
//     console.log('nyello');
// }

// document.body.addEventListener('click', high5);

// const arr = ['Ion', 'gheorghe', 'Malelei'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('hey');
// greeterHey('joas');
// greeterHey('biorghe');
// greet('nyello')('boi');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// // lufthansa.book(239, 'Robert');
// // lufthansa.book(1337, 'Mike Ock');
// // console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// const bookEw = book.bind(eurowings);
// const bookLh = book.bind(lufthansa);

// // bookEw(23, 'Steve leve');

// const bookEw23 = book.bind(eurowings, 23);

// // bookEw23('Jonas Bandonas');
// // bookEw23('Finish this hsit');

// //----------------
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;

//   console.log(this.planes);
// };

// //document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// // const addTax = (rate, value) => value + value * rate;

// const specificTax = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT = specificTax(0.23);

// console.log(addVAT(130));

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
// };

// poll.registerNewAnswer = function () {
//   let message = `${this.question}\n${this.options.join(
//     '\n'
//   )}\n(Write option number)`;

//   let answer = Number(prompt(message));

//   if (typeof answer === 'number' && answer < 4) {
//     this.answers[answer]++;
//     this.displayResults(this.answers);
//   } else console.log('Incorrect input!');
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults = function (type = 'array') {
//   if (type === 'array') console.log(this.answers);
//   else console.log(`Poll restults are ${this.answers.join(', ')}`);
// };

// //[5, 2, 3]
// //[1, 5, 3, 9, 6, 1]

//  poll.displayResults.call({answers: [5, 2, 3]}, 'string');

// const runOnce = function () {
//   console.log('this will never run agin');
// };

// runOnce();

// (function () {
//   console.log('heyehed');
//   const isPrivate = 23;
// })();

// console.log(isPrivate);

// (() => {
//   console.log('run once');
// })();

// const securebooking = function() {

//   let passengerCount = 0;

//   return function() {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   }

// };

// const booker = securebooking();
// booker();
// booker();
// booker();

// console.dir(booker);

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;

//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// h();
// f();
// console.dir(f);

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;

// boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
