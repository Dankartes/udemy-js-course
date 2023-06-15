'use strict';

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob']
};


const jessicaCopy = {...jessica};

jessicaCopy.lastName = 'David';

// console.log(jessica, jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(jessica, jessicaCopy);