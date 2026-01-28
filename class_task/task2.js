// Task 2: Log File Analyzer using Streams 
// Scenario
// A company server generates a huge log file (500MB+). You are asked to analyze it without loading the full file into memory.
// Tasks
// Create a program that:Reads a large log file using streamsCounts:
// Total lines
// Number of ERROR, WARNING, INFO
// Generates a summary report file
//  Constraints
// Must use streams
// No readFile
// Efficient memory usage

const fs=require('fs');
const readline=require('readline');
const logFilePath='large_log_file.log';
const reportFilePath='log_summary_report.txt';
let totalLines=0;
let errorCount=0;
let warningCount=0;
let infoCount=0;
const readStream=fs.createReadStream(logFilePath);
const rl=readline.createInterface({
    input:readStream,   
    crlfDelay:Infinity
});
rl.on('line',(line)=>{
    totalLines++;
    if(line.includes('ERROR')){
        errorCount++;
    }else if(line.includes('WARNING')){
        warningCount++;
    }else if(line.includes('INFO')){
        infoCount++;
    }                                                                                                                                       
});
rl.on('close',()=>{
    const report=`Log Summary Report\n===================\nTotal Lines: ${totalLines}\nERROR: ${errorCount}\nWARNING: ${warningCount}\nINFO: ${infoCount}\n`;
    fs.writeFile(reportFilePath,report,(err)=>{
        if(err){
            console.error(`Error writing report file: ${err.message}`);
            return;
        }
        console.log(`Log summary report generated at ${reportFilePath}`);
    });
});
