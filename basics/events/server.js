const http = require('http');


const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request Received.');

  res.end('Request received.');
});

server.on('request', (req, res) => {
  console.log('Another request received 👍');
})

server.on('close', () => {
  console.log('Server Closed');
});

server.listen(5000, '127.0.0.1', () => {
  console.log('Server is listening on...');
});