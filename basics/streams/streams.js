const fs = require("fs");
const http = require('http');

// TODO: Load a big file using Readable Stream
const server = http.createServer();

server.on('request', (req, res) => {
  // * Solution 01: Using fs.readFile()

  // ! It is not idle for production lavel because it will take a lot of time to load a big file.
  // fs.readFile('./test-file.txt', 'utf-8', (err, data) => {
  //   if (err) console.log(err);

  //   res.end(data);
  // });

  // * Solution 02: using Streams

  // Creating Readable stream.
  const readable = fs.createReadStream('./test-file.txt', 'utf-8');

  // Attaching listener on readable for data
  readable.on('data', chunk => {

    // writing data into response writable stream
    res.write(chunk);
  });

  // listening for readable stream to end 
  readable.on('end', () => {
    // Closing writable stream when readable stream ends
    res.end();
  });

  // Listening to errors occured during reading stream
  readable.on('error', error => {
    console.log(error)
    res.statusCode = 410;
    res.end('File not FOund');
  });
});

server.listen(5000, '127.0.0.1', () => {
  console.log('Listening On 127.0.0.1:5000 ...');
});