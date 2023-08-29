const http = require('http');
const fs = require('fs');
const url = require('url');

const replaceTemplate = (template, product) => {
    // console.log(product.productName);
    let output = template.replace(/{%PRODUCT_NAME%}/g, product.productName);
    output = output.replace(/{%PRODUCT_ID%}/g, product.id);
    output = output.replace(/{%PRODUCT_IMAGE%}/g, product.image);
    output = output.replace(/{%PRODUCT_FROM%}/g, product.from);
    output = output.replace(/{%PRODUCT_NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%PRODUCT_QUANTITY%}/g, product.quantity);
    output = output.replace(/{%PRODUCT_PRICE%}/g, product.price);
    output = output.replace(/{%PRODUCT_DESCRIPTION%}/g, product.description);
    
    if (!product.oranic) output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");

    // console.log(output);
    return output;
}

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

const server = http.createServer((req, res) => {

    const uriPath = req.url;
    console.log(uriPath);

    if (uriPath === '/' || uriPath === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' });

        const cardHtml = dataObj.map(el =>replaceTemplate(productCard, el)).join('');

        const tempOverview = replaceOverviewTemplate(templateOverview, cardHtml);

        res.end(tempOverview);

    } else if (uriPath === "/product") {
        res.end("This is PRODUCT");

    } else if (uriPath === '/api') {
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