var os = require('os');

function formatTime(){
    var uptime = os.uptime();
    var seconds = (uptime % 60).toFixed(0);
    var minutes = (uptime / 60 % 60).toFixed(0);
    var hours = (uptime / 60 / 60).toFixed(0);
    console.log('Uptime: ', hours, 'godz.', minutes, 'min.', seconds, 'sec.');
}

module.exports = {
    printTime: formatTime
};