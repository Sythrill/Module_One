var http = require('http');
var handlers = require('./handlers');
var colors = require('colors');

function start() {
    function onRequest(request, response) {
        console.log('Odebrano zapytanie.');
        console.log('Zapytanie ' + request.url + ' odebrane.');

        response.writeHeader(200, {'Content-Type':'text/plain; charset=utf-8'});

        switch (request.url) {
            case '/':
            case '/start':
                handlers.welcome(request, response);
                break;
            case '/upload':
                handlers.upload(request, response);
                break;
            case '/show':
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