const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);

      resolve(data);
    })
  });
}

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject(err);

      resolve('success');
    });
  });
}

// Learning Promise Chaning

readFilePro(`${__dirname}/dog.txt`)
  .then(data => {
    console.log(`Data: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  }).then(res => {
    console.log(res.body.message);
    return writeFilePro('dog-img.txt', res.body.message);
  }).then(() => {
    console.log('Random dog image saved to file!');
  }).catch(err => {
    console.log(err.message);
  });