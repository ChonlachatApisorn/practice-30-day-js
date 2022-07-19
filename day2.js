console.log('I hope everone is enjoy the 30 Day Of JavaScript challenge.\n Do you?');
console.log('Day\tTopics\tExercises\ttestCase');
console.log('Day 1\t3\t5\t6');
console.log('In every programming language it starts with \"Hello, World!\"')

const PI = Math.PI

console.log(PI);
console.log(Math.round(PI+0.5)); // to round values to the nearest number
console.log(Math.floor(PI+0.8)); // rounding down
console.log(Math.ceil(PI)); // rounding up
console.log(Math.min(-5, 3, 20, 4, 5, 10))
console.log(Math.max(-5, 3, 20, 4, 5, 10))
console.log(Math.abs(-90)); // absolute
console.log(Math.sqrt(100)) // Square root
console.log(Math.pow(3, 2)) // Power

/* 

\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
 
*/

let string = 'JavaScript'

console.log('1: '+string.substring(0)) // 1: JavaScript
console.log('2: '+string.substring(2,6)) // 2: vaSc
console.log('3: '+string.substring(4)) // 3: Script

let country = 'Finland'

console.log(country.includes('fin'))     // false 'it don't have "fin" in str, just have "Fin" '
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false 'it don't have "Land" in str, just have "land" '

// replace(): takes as a parameter the old substring and a new substring.
// string.replace(oldsubstring, newsubstring)
let stringReplace = '30 Days Of JavaScript'
console.log(stringReplace.replace('JavaScript', 'Python')) // 30 Days Of Python

let stringCharAt = '30 Days Of JavaScript'
console.log(stringCharAt.charAt(11)) // J of '30 Days Of JavaScript'

let stringMatch = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(stringMatch.match('love'))