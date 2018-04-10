var fs = require('fs');

fs.readdir('../filesSystem', function(err, files){
    console.log(files);

    fs.writeFile('./tekst.txt', files, function(err){
        if (err) throw err;
        console.log('Zapisano.');

        fs.readFile('./tekst.txt', 'utf-8', function(err, data){
            console.log(data);
        });
    });
});
