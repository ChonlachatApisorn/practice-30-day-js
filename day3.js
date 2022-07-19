/*

Addition( + ): a + b
Subtraction( - ): a - b
Multiplication( * ): a * b
Division( / ): a / b
Modulus( % ): a % b
Exponential( ** ): a ** b

*/

console.log(2 ** 3); // 8

// && ampersand operator example

const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true

let isRaining = false // can chage to {false, true}
isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.') // true :'You need a rain coat.', false :'No need for a rain coat.'

const date = new Date()
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth()); // month mean [0: jan, 1:Feb, 2:May, ...]
console.log(date.getDay()); // day mean [0: Sunday, 1: Monday, 2:Thuseday, ...]
console.log(date.getDate()); 