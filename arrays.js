"use strict";

/* let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(letters[4]);

let newarr = letters;
newarr[4] = "*";

console.log(letters[4]);

console.log(letters); */

const people = ["Harry", "Ron", "Hermione"];
let result;

result = people.push("Draco");

result = people.pop();

result = people.push("Neville");

result = people.push("Luna");

result = people.slice(0, 3);

result = people.splice(1, 0, "Cho");

people[1] = "Ginny";

result = people.push("Fred", "George");

result = people.indexOf("Fred");

result = people.splice(result, 1);

console.log(result);
console.log(people);

const letters = Array.from("abcdefghijklmn");

console.log(letters);

const str = "abcdefghijklmn";
const arr1 = str.split();
const arr2 = Array.from(str);

console.log(arr1);
console.log(arr2);
