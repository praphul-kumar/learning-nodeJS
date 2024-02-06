const EventEmitter = require('events');

/** 
 * * Creating custom evnt emitter class "SaleEvent" that extends EventEmitter class
 * * with all of their properties and methods
*/
class SaleEvent extends EventEmitter {
  constructor() {
    super();
  }
}

// * Creating new object of SaleEvent class
const myEmitter = new SaleEvent();

// * Attaching Observers to listen for "sale" event.
myEmitter.on('newSale', () => {
  console.log('New Sale Alert!!');
});

// * Attaching Objeserver to listen for "newSale" event with payload.
myEmitter.on('newSale', (saleData) => {
  console.log(`Customer Name: ${saleData.customerName}`);
});


// ! Emmiting new event with data payload
myEmitter.emit('newSale', {
  customerName: "John"
});

