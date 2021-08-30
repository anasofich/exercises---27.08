"use strict";
//Trying first name
const name1 = "Peter Heronimous Lind";
const firstSpace = name1.indexOf(" ");
const lastSpace = name1.lastIndexOf(" ");

const firstName1 = name1.substring(0, firstSpace);

const middleName1 = name1.split(" ")[1];
const middleName1op2 = name1.substring(firstSpace + 1, lastSpace);

const lastName1 = name1.substring(lastSpace + 1);

console.log(firstName1);
console.log(middleName1);
console.log(middleName1op2);
console.log(lastName1);

//Trying second name
const name2 = "Ana Sofia Castellanos";
const firstSpace2 = name2.indexOf(" ");
const lastSpace2 = name2.lastIndexOf(" ");

const firstName2 = name2.substring(0, firstSpace2);

const middleName2 = name2.split(" ")[1];
const middleName2op2 = name2.substring(firstSpace2 + 1, lastSpace2);

const lastName2 = name2.substring(lastSpace2 + 1);

console.log(firstName2);
console.log(middleName2);
console.log(middleName2op2);
console.log(lastName2);
