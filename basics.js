"use strict";

window.addEventListener("DOMContentLoaded", start);
console.log("it's working!");

function start() {}

const bool = true;
const num = 41;
const str = "Peter";
const obj = {
  cats: 2,
  cars: 1,
};
const nothing = null;
let undf;
const symbol = Symbol("symbol");

typeof bool;
typeof num;
typeof str;
typeof obj;
typeof nothing;
typeof undf;
typeof symbol;
typeof somethingelse;

const n1 = 1;
const n2 = 2;

const s1 = "1";
const s2 = "2";

const value = " ";

if (value) {
  console.log("Value is truthy");
} else {
  console.log("Value is falsy");
}
