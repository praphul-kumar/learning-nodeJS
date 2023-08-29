const http = require('http');
const fs = require('fs');
const url = require('url');
const slugify = require('slugify');

const { replaceTemplate } = require('./modules/replaceTemplate');

const replaceOverviewTemplate = (template, products) => {
    let output = template.replace(/{%PRODUCT_CARDS%}/g, products);
    
    return output;
}


// Reading Template Files
const templateOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const templateProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const productCard = fs.readFileSync(`${__dirname}/templates/product-card.html`, 'utf-8');

const jsonData = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(jsonData);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);


const server = http.createServer((req, res) => {

    console.log(url.parse(req.url));
    const { query, pathname } = url.parse(req.url, true);
    // const uriPath = req.url;
    console.log(pathname);

    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        
        const cardHtml = dataObj.map(el =>replaceTemplate(productCard, el)).join('');
        
        const tempOverview = replaceOverviewTemplate(templateOverview, cardHtml);
        
        res.end(tempOverview);
        
    } else if (pathname === "/product") {
        res.writeHead(200, { 'Content-type': 'text/html' });
        console.log("Query: ", query);
        const product = dataObj[query.id];

        console.log(product);
        const output = replaceTemplate(templateProduct, product);
        
        res.end(output);

    } else if (pathname === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
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