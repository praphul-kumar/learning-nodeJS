// Importing `fs` module to perform read and write operations on a file.
const fs = require('fs');

// // Reading a FIle synchronously
// const textData = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textData);

// const textToWrite = `This is all we know about avocado: ${textData}.\n Created on ${Date.now()}`;

// // Writing a file Synchronously
// fs.writeFileSync('./txt/output.txt', textToWrite);

// console.log('Text Written in output.txt file');

// Reading a file Asynchronously 
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
    if (err) console.log(err);

    fs.readFile(`./txt/${data}.txt`, 'utf-8', (err, data2) => {
        if (err) console.log(err);
        console.log(data2);

        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            if (err) console.log(err);
            console.log(data3);

            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                if (err) throw err;

                console.log('Your file has been written!');
            });
        });
    });
});

console.log('Will read file!');