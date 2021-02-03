"use strict";

const str = "test";
const arr = [1, 2, 3];

console.log (str.toUpperCase());

console.log (str);
console.log (str[2]);

const fruit = "Some fruit";
console.log(fruit.indexOf("r")); //показывает номер символа в строке

const logg = "Hello world";
console.log(logg.slice(6, 11)); //вырезает строку с 6 символа до 11
console.log(logg.substring(6, 11)); //вырезает строку с 6 символа до 11
console.log(logg.substr(6, 5)); //вырезает строку с 6 символа и последующие 5

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test)); //возвращает число
console.log(parseFloat(test)); //возвращает число с частью
