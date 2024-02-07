// * arguments: Array of values which are possible to pass into a function in JavaScript
// console.log(arguments);

// * Printing the Wrapper function that is used to require a module in JS
// console.log(require('module').wrapper);

// * Importing Custom module of: module.exports
// const Calculator = require('./test-module-1');

// const calc = new Calculator();

// console.log(calc.add(10, 20));

// * Importing module of: exports
const calc = require('./test-module-2');

console.log(calc.add(10, 20));
