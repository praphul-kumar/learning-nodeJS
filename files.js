// Importing `fs` module to perform read and write operations on a file.
const fs = require('fs');

// Reading a FIle syncronously
const textData = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textData);

const textToWrite = `This is all we know about avocado: ${textData}.\n Created on ${Date.now()}`;

// Writing a file Syncronously
fs.writeFileSync('./txt/output.txt', textToWrite);

console.log('Text Written in output.txt file');