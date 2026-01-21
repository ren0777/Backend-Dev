// Task 4: System Monitor & Logger Tool Scenario
// Your company wants a background tool to monitor system health.Requirements
// Create a Node.js program that:Uses os module to fetch:
// CPU count
// Free & total memory
// Platform
// Uses path module to generate file path
// Logs system data every 5 seconds into system-log.txt
// Uses setInterval
// Uses fs.appendFile
// Code must be modular
// systemInfo.js
// logger.js
// app.js

const os = require('os');
const path = require('path');
const fs = require('fs');
module.exports = getSystemInfo;
module.exports = logSystemInfo;
// systemInfo.js
function getSystemInfo() {
    return {
        cpuCount: os.cpus().length,
        freememory: os.freemem(),
        totalmemory: os.totalmem(),
        platform: os.platform()
    };
}
// logger.js
const getSystemInfo = require('./systemInfo');
const LogFilePath = path.join(__dirname, 'system-log.txt');
function logSystemInfo() {
    const systemInfo = getSystemInfo();
    const logEntry = `${new Date().toISOString()} - CPU Count: ${systemInfo.cpuCount}, Free Memory: ${systemInfo.freememory}, Total Memory: ${systemInfo.totalmemory}, Platform: ${systemInfo.platform}\n`;
    fs.appendFile(LogFilePath, logEntry, (err) => {
        if (err) console.log('Error logging system info:', err);
    });
}
// app.js
const logSystemInfo = require('./logger');
setInterval(logSystemInfo, 5000);
logSystemInfo(); // Initial log on start

    else{
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({error:"Route not found"}));
    }

const PORT=3000;
server.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));


