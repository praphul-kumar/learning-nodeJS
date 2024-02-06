const EventEmitter = require('events');

// Creating new EventEmitter
const myEmitter = new EventEmitter();

// Attaching listeners on myEmitter to listen when it emits "newSale" event 
myEmitter.on('newSale', () => {
  console.log('There was a new sale!!');
});

// we can attach multiple listeners (to a single event emitter)/ (for a single event)
myEmitter.on('newSale', () => {
  console.log('Customer name: John');
});

// We can also listen for an event that have some payload with that like below
myEmitter.on('newSale', stock => {
  console.log(`There is only ${stock} items left in the Stock.`);
})


// Emitting new event "newSale" by using emit method on EventEmitter Object
// myEmitter.emit("newSale");

// We can also pass an argument while emitting an event
myEmitter.emit("newSale", 10);