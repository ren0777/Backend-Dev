// Task 1: File Manager CLI Tool
// Scenario
// You are working as a backend intern. Your manager asks you to build a command-line File Manager that can perform basic file operations.
// Tasks
// Create a Node.js program that supports the following commands:
// Read a file
// Write content to a file
// Append logs to a file
// Copy a file
// Delete a file
// List files inside a directory
//  Constraints
// Use asynchronous fs methods
// Handle errors properly (ENOENT, EACCES)
// Use process.argv for input


const fs=require('fs');
const path=require('path');

const command=process.argv[2];
const filePath=process.argv[3];
const content=process.argv[4];
const destPath=process.argv[5];
switch(command){
    case 'read':
        fs.readFile(filePath,'utf8',(err,data)=>{
            if(err){    
                console.error(`Error reading file: ${err.message}`);
                return;
            }
            console.log(`Content of ${filePath}:\n${data}`);
        }   );
        break;
    case 'write':   
        fs.writeFile(filePath,content,(err)=>{
            if(err){
                console.error(`Error writing to file: ${err.message}`);
                return;
            }
            console.log(`Content written to ${filePath}`);
        }); 
        break;
    case 'append':
        fs.appendFile(filePath,content,(err)=>{ 
            if(err){
                console.error(`Error appending to file: ${err.message}`);
                return;
            }
            console.log(`Content appended to ${filePath}`);
        }
        );
        break;
    case 'copy':
        fs.copyFile(filePath,destPath,(err)=>{
            if(err){
                console.error(`Error copying file: ${err.message}`);
                return;
            }
            console.log(`File copied from ${filePath} to ${destPath}`);
        }   );
        break;
    case 'delete':
        fs.unlink(filePath,(err)=>{
            if(err){
                console.error(`Error deleting file: ${err.message}`);
                return;
            }
            console.log(`File ${filePath} deleted`);
        }   );
        break;
    case 'list':
        fs.readdir(filePath,(err,files)=>{
            if(err){
                console.error(`Error listing files: ${err.message}`);
                return;
            }
            console.log(`Files in directory ${filePath}:\n${files.join('\n')}`);
        }
        );
        break;
    default:
        console.log('Invalid command. Use one of the following commands: read, write, append, copy, delete, list');
}
 



