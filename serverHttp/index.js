var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', function (err, html) {
            response.writeHeader(200, {'Content-Type':'text/html; charset=utf-8'});
            response.write(html);
            response.end();
        });

    } else {
        fs.readFile('./404.jpg', function (err, picture) {
            response.writeHeader(200, {'Content-Type':'image/jpg'});
            response.write(picture);
            response.end();
        });
    }

});
server.listen(8080);