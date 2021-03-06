var formatTime = require('./formatTime');
var os = require('os');
var colors = require('colors');

function getOSinfo() {
    var type = os.type();
    var release = os.release();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    console.log('System: '.blue, type);
    console.log('Release:'.red, release);
    var cpu = os.cpus()[0].model;
    console.log('CPU model: '.blue, cpu);
    formatTime.printTime();
    var userInfo = os.userInfo();
    console.log('User name: '.yellow, userInfo.username);
    console.log('Home dir: '.white, userInfo.homedir);
}

module.exports = {
    print:getOSinfo
};