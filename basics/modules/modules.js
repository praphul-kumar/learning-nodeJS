// * arguments: Array of values which are possible to pass into a function in JavaScript
// console.log(arguments);

// * Printing the Wrapper function that is used to require a module in JS
// console.log(require('module').wrapper);

// * Importing Custom module of: module.exports
// const Calculator = require('./test-module-1');

// const calc = new Calculator();

// console.log(calc.add(10, 20));

// * Importing module of: exports

// Example 01:
// const calc = require('./test-module-2');

// console.log(calc.add(10, 20));

// Example 02:
// const {add, multiply} = require('./test-module-2');
// console.log(add(10, 30));

// * Caching module
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();

// Here you can see in the output that:
// we have only one console log that is the module but we are requiring it three time 
// but due to cache it is required only one time where as the function runs three time.