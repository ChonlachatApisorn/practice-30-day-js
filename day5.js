const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

// split string
let js = 'JavaScript';
console.log(js.split('')); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companiesString.split(',')); // ['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']

// size of array
const webTechs = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB' ] // List of web technologies
console.log("the size of the array: " + webTechs.length);
console.log(webTechs[webTechs.length - 1]); // output is 'MongoDB' because it mean select last index of array

// Modifying array element
const numbersInArray = [1, 2, 3, 4, 5]
numbersInArray[0] = 10 // changing 1 at index 0 to 10
numbersInArray[1] = 20 // changing  2 at index 1 to 20
console.log(numbersInArray); // [10, 20, 3, 4, 5]

// static values with fill
const arr = Array() // creates an an empty array
console.log(arr)

const four4values = Array(5).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4, 4]
