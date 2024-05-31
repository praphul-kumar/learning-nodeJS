/**
 * A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
 * Promises are used to handle asynchronous operations in a more manageable way.
 * Here are some of the key features of promises:
 *  - Promises can be chained together, which allows you to handle multiple asynchronous operations in a sequence.
 *  - Promises can be used to handle errors in a more robust way.
 *  - Promises can be used to make your code more readable and maintainable.
 */

const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then(res => {
      console.log(res.body.message);

      fs.writeFile('dog-img.txt', res.body.message, err => {
        if (err) return console.log(err.message);

        console.log('Random dog image saved to file!');
      });
    }) 
    .catch(err => {
      console.log(err.message);
    })
})
