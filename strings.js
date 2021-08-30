"use strict";

const longline = "A very, very, very, very.very, VERY! long line of text, \n \
 that spans across the width of the editor!";

const name = "Peter";
const drink = "Coca Cola";

const text = `      Hello ${name}, 



would you like a ${drink}?`;

console.log(text);

console.log("hello " + name + ", would you like a " + drink + "?");
