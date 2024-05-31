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

// Consuming Promises using Async/Await
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    // Waiting for multiple Promises simultaniously
    const res1dog = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    const res2dog = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    const res3dog = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);

    const all = await Promise.all([res1dog, res2dog, res3dog]);

    const imgs = all.map(el => el.body.message);

    console.log(imgs);
  
    await writeFilePro('dog-img.txt', imgs.join('\n'));
    console.log('Random dog image saved to file!');
  } catch(err) {
    console.log(err.message);
  }
}

getDogPic();