const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    const uriPath = req.url;

    if (uriPath === '/' || uriPath === '/overview') {
        res.end('This is OVERVIEW');
    } else if (uriPath === "/product") {
        res.end("This is PRODUCT");
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