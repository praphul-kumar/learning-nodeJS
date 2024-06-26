const fs = require('fs');
const superagent = require('superagent');

// Building Promises
const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('Failed to read the file!');

      resolve(data);
    })
  })
}

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('Failed to write to file!');

      resolve('success');
    });
  });
}

// Consuming Promises
readFilePro(`${__dirname}/dog.txt`).then(data => {
  console.log(`Breed: ${data}`);

  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
  .then(res => {
    console.log(res.body.message);

    writeFilePro('dog-img.txt', res.body.message).then(() => {
      console.log('Random dog image saved to file!');
    }).catch(err => {
      console.log(err);
    });

  }).catch(err => {
    console.log(err);
  });
}).catch(err => {
  console.log(err);
});