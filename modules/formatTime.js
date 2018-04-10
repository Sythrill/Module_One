var os = require('os');

function formatTime() {
    var uptime = os.uptime();
    var hours = Math.floor(uptime / 3600);
    var minutes = Math.floor((uptime - (hours * 3600)) / 60);
    var seconds = Math.floor(uptime - (hours * 3600) - (minutes * 60));

    console.log(uptime);
    console.log('Uptime: ', hours, 'godz.', minutes, 'min.', seconds, 'sec.');
}

module.exports = {
    printTime:formatTime
};