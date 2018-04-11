var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    console.log('Usage:');
    console.log('/sayhello -- print welcome message');
    console.log('/getOSinfo -- print info about your OS system');
    console.log('/exit -- close appilcation');
    var input = process.stdin.read();
    if (! input) return;
    var instruction = input.trim();
    switch (instruction) {
        case '/exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
            break;
        case '/sayhello':
            process.stdout.write('hello!\n');
            break;
        case '/getOSinfo':
            OSinfo.print();
            break;
        default:
            process.stderr.write('Wrong instruction!\n');
    }

});
