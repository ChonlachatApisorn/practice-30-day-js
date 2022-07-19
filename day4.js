// if 
let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`) //  3 is a positive number
}

// if, else
let isRaining = true
if (isRaining) {
  console.log('You need a rain coat.') // out put
} else {
  console.log('No need for a rain coat.')
}

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.') // out put
}

// if, else if
let a = 10
if (a > 0) {
  console.log(`${a} is a positive number`) // out put
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

// switch case
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.') // out put
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}