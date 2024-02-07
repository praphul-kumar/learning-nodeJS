// * arguments: Array of values which are possible to pass into a function in JavaScript
// console.log(arguments);

// * Printing the Wrapper function that is used to require a module in JS
// console.log(require('module').wrapper);

// * Importing Custom module
const Calculator = require('./test-module-1');

const calc = new Calculator();

console.log(calc.add(10, 20));