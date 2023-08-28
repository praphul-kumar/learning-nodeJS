const http = require('http');
const fs = require('fs');
const url = require('url');

const jsonData = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const server = http.createServer((req, res) => {

    const uriPath = req.url;
    console.log(uriPath);

    if (uriPath === '/' || uriPath === '/overview') {
        res.end('This is OVERVIEW');
    } else if (uriPath === "/product") {
        res.end("This is PRODUCT");
    } else if (uriPath === '/api') {
        res.writeHead(200, {
            'Content-type': 'application/json'
        });

        res.end(jsonData);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end("<h1>Page Not Found!!</h1>");
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
})