"use strict";

/* const longline = "A very, very, very, very.very, VERY! long line of text, \n \
 that spans across the width of the editor!";

const name = "Peter";
const drink = "Coca Cola";

const text = `      Hello ${name}, 



would you like a ${drink}?`;

console.log(text);

console.log("hello " + name + ", would you like a " + drink + "?");

const len = name.length;

console.log(`${name} is ${len} characters long`);

const letter = name[0];
console.log(`The first letter of ${name} is ${letter}`); */

const name = "Albus Percival Wulfric Brian Dumbledore";

const len = name.length;
const character = name[6];
//const letter = name[D];

console.log(`Total number of characters is: ${len}`);
console.log(`The character at index 6 is ${character}`);
//console.log(`The index of the first D in Dumbledore is ${name[D]}`);

const str1 = " \t  There is     space here \n   ";
const str2 = str1.trim();

console.log(`What does _${str2}_ contain?`);

const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0, 5);
const lastName = fullName.substring(17);

console.log(`first name is: _${firstName}_`);
console.log(`lastname is ${lastName}`);

const task1 = name.substring(0, 5);
const task2 = name.substring(29);
const task3 = name.substring(15, 22);
const task4 = name.substring(14, 23);
const task5 = name.substring(25, 28);
const task6 = name.substring(2, 5);

console.log(`_${task1}_`);
console.log(`_${task2}_`);
console.log(`_${task3}_`);
console.log(`_${task4}_`);
console.log(`_${task5}_`);
console.log(`_${task6}_`);
