'use strict';

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// Prototypes
// console.log(Person.prototype);

// jonas.calcAge();
// jack.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);

// Person.prototype.species = 'Homo Sapiens';

// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [2, 1, 1, 2, 3, 4, 5];

// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.log(h1.__proto__);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`'${this.make}' going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`'${this.make}' going at ${this.speed} km/h`);
// };

// const BMW = new Car('BMW', 50);

// BMW.accelerate();
// BMW.brake();

// console.log(jessica);
// jessica.calcAge();
// jessica.greet();

// const account = {
//   owner: 'jonas',
//   movements: [200, 500, 120, 300],

//   get latest() {
//     return this.movements.at(-1);
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is no a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey :^)');
//   }
// }

// PersonCl.hey();
// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);

// const walter = new PersonCl('Walter', 1965);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// steven.name = 'Steven';
// steven.birthYear = 2002;

// console.log(steven);
// steven.calcAge();

// console.log(steven.__proto__ == PersonProto);

// const sara = Object.create(PersonProto);
// sara.init('Sarah', 1979);
// sara.calcAge();

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`'${this.make}' going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`'${this.make}' going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const bmw = new Car('BMW', 50);

// bmw.accelerate();
// bmw.brake();
// console.log(bmw.speedUS);
// bmw.speedUS = 120;
// console.log(bmw.speedUS);
// console.log(bmw.speed);

//------------------------------------------------
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   this.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log('here:', mike);
// mike.introduce();
// mike.calcAge();
// console.log(mike.__proto__);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`'${this.make}' going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`'${this.make}' going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = Car;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} going at ${this.speed}, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 100, 45);
// const bmw = new Car('BMW', 80);

// bmw.accelerate();
// bmw.brake();

// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is no a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey :^)');
//   }
// }

// class Student extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(`I'm ${2037 - this.birthYear} years young.`);
//   }
// }

// const martha = new Student('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

// console.log(martha);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (isntances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.#pin = pin;
    this.currency = currency;
    // protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Hello ${owner}!`);
  }

  //Public interface

  // 3) Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved!');
      return this;
    }
  }

  // 4) Private methods
  #approveLoan() {
    return true;
  }
}

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);

// acc1.#movements.push(250);
// acc1.#movements.push(-140);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
// acc1.deposit(120).deposit(340).withdraw(90).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EvCl extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Battery charged to ${chargeTo}%!`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed}, with a charge of ${this.#charge}`
    );
    return this;
  }
}

const tesla = new EvCl('Tesla', 120, 80);

tesla.accelerate().brake().brake().chargeBattery(500).accelerate();

console.log(tesla.speedUS);
