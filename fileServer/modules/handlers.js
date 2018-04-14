var fs = require('fs');
var formidable = require('formidable');
var path = require('path');
var imgDir = 'C:/Pliki/';
var url = require('url');


exports.upload = function (request, response) {
    console.log('Rozpoczynam obsługę żądania upload.');

    var form = new formidable.IncomingForm();

    form.parse(request, function (error, fields, files) {

        var oldpath = files.upload.path;
        var filename = files.upload.name;
        var newpath = imgDir + filename;

        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;

            console.log('Plik załadowany na serwer');

            var files = fs.readdirSync(imgDir);

            response.writeHead(200, {'Content-type':'text/html'});
            response.write('Pliki wgrane na serwer:<br/ ');
            var imgList = '<ul>';
            for (var i = 0; i < files.length; i ++) {
                imgList += '<li><a href="/?show=' + files[i] + '">' + files[i] + '</li>';
            }
            imgList += '</ul>';
            response.end(imgList);
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

exports.show = function (request, response) {

    var query = url.parse(request.url, true).query;

    //console.log(query);

    pic = query.show;

    //console.log(pic);

    fs.readFile(pic, "binary", function (error, file) {
        response.writeHead(200, {"Content-Type":"image/png"});
        response.write(file, "binary");
        response.end();
    });
};

exports.error = function (request, response) {
    console.log('Nie wiem co robić.');
    response.write('404 :(');
    response.end();
};





