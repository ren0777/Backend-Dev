// Lab Exercise 2: Log File Analyzer
// Build a program that reads log files using streams, parses them, and generates a summary
// report with error counts and statistics.

const fs = require("fs");
const readline = require("readline");

const logFile = process.argv[2];


let infoCount = 0;
let warningCount = 0;
let errorCount = 0;


const fileStream = fs.createReadStream(logFile);

const rl = readline.createInterface({
  input: fileStream
});


rl.on("line", function (line) {

  if (line.includes("INFO")) {
    infoCount++;
  } 
  else if (line.includes("WARNING")) {
    warningCount++;
  } 
  else if (line.includes("ERROR")) {
    errorCount++;
  }
});

rl.on("close", function () {
  console.log("----- Log File Summary -----");
  console.log("INFO Count    :", infoCount);
  console.log("WARNING Count :", warningCount);
  console.log("ERROR Count   :", errorCount);
});
