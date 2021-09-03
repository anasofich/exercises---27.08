"use strict";

const person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

const person2 = {
  firstName: "Ana",
  age: 23,
  student: true,
};

console.log(person1.lastName);

person1.lastName = "Lind";

console.log(person1.lastName);
console.log(person1);

person1.lastName = undefined;

console.log(person1.lastName);
console.log(person1.middleName);
console.log(person1);

delete person1.lastName;

console.log(person1.lastName);
console.log(person1);

person1.age++;

console.log(person1);

//person1 = person2;
