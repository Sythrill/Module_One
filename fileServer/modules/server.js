var http = require('http');
var colors = require('colors');
var handlers = require('./handlers');
var url = require('url');

function start() {
    function onRequest(request, response) {

        console.log("Odebrano zapytanie.");
        console.log('Zapytanie ' + request.url + ' odebrane.');

        var query = url.parse(request.url, true).query;
        pic = query.show;

        response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
        switch (request.url) {
            case '/':
            case '/start':
                handlers.welcome(request, response);
                break;
            case '/upload':
                handlers.upload(request, response);
                break;
            case '/?show=' + pic:
                handlers.show(request, response);
                break;
            default:
                handlers.error(request, response);
        }
    }

    http.createServer(onRequest).listen(9000);

    console.log('Uruchomiono serwer!'.green);
}


module.exports = {
    start:start
};