"use strict";

/* const person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

const person2 = person1;

person2.firstName = "other Peter";

console.log(person1.firstName);

let person3 = person1;
 */

let person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

const person2 = {
  firstName: "other peter",
  age: 28,
  student: false,
};

let person3 = person1;
person3.firstName = "Changed";

person3 = person2;

person2.firstName = "Also changed";

person1 = person3;

console.log("Person 1:");
console.log(person1);
console.log("Person 2:");
console.log(person2);
console.log("Person 3:");
console.log(person3);
