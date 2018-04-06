process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function(){
    var nodeVersion = 'Node version: ' + process.version + '\n';
    var osSystem = process.platform;
    var osLanguage = process.env.LANG;

    process.stdout.write(nodeVersion);

    switch(osSystem){
        case 'darwin':
            process.stdout.write('MacOS OS Language is: ' + osLanguage + '.\n');
            break;
        case 'linux':
            process.stdout.write('Linux OS Language is: ' + osLanguage + '.\n');
            break;
        default:
            process.stderr.write("Sorry, I don't know system language for " + osSystem + '.\n');
    }

    var input = process.stdin.read();
    if(input !== null){
        var instruction = input.toString().trim();
        if(instruction === '/exit'){
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else{
            process.stderr.write('Wrong instruction!\n');
        }
    }
});
