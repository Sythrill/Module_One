var fs = require('fs');
var formidable = require('formidable');
var path = require('path');


exports.upload = function (request, response) {
    console.log('Rozpoczynam obsługę żądania upload.');
    var form = new formidable.IncomingForm();
    form.parse(request, function (error, fields, files) {
        var oldpath = files.upload.path;
        var filename = files.upload.name;
        var newpath = 'C:/Pliki/' + filename;

        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            var xxx = fs.readdirSync('C:/Pliki/');
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write('recived image:<br/>');
            for (var i in xxx) {
                response.write("<img src='/show' />");
                response.end();
            }
        });
    });

};

exports.welcome = function (request, response) {
    console.log('Rozpoczynam obsługę żądania welcome.');
    fs.readFile('templates/start.html', function (err, html) {
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        response.write(html);
        response.end();
    });
};

exports.error = function (request, response) {
    console.log('Nie wiem co robić.');
    response.write('404 :(');
    response.end();
};

exports.show = function (request, response, filename) {
    fs.readFile('C:/Pliki/' + filename, 'binary', function (error, file) {
        response.writeHead(200, {'Content-Type':'image/jpg'});
        response.write(file, 'binary');
        response.end();
    });
};








