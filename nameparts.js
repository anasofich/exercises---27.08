"use strict";
const name1 = "Peter Heronimous Lind";
const firstSpace = name1.indexOf(" ");
const lastSpace = name1.lastIndexOf(" ");

const firstName1 = name1.substring(0, 5);
const firstName1opt2 = name1.substring(0, firstSpace);

const middleName1 = name1.split(" ")[1];
const middleName1op2 = name1.substring(firstSpace + 1, lastSpace);

const lastName1 = name1.substring(lastSpace + 1);

console.log(firstName1);
console.log(firstName1opt2);
console.log(middleName1);
console.log(middleName1op2);
console.log(lastName1);
