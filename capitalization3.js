"use strict";

//First combination
const myName = "sofia";

const comb1 = myName.substring(0, 2).toLowerCase() + myName.substring(2, 3).toUpperCase() + myName.substring(3).toLowerCase();

console.log(comb1);

//Second combination

const comb2 = myName.substring(0, 1).toUpperCase() + myName.substring(1, 2).toLowerCase() + myName.substring(2, 3).toLocaleUpperCase() + myName.substring(3, 4).toLowerCase() + myName.substring(4).toUpperCase();

console.log(comb2);
