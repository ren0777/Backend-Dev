//read Stream
const fs=require('fs');
//error handling 

fs.readFile('input.txt',(err,data)=>{
    if(err){
        if(err.code==='ENOENT'){
            console.error('File not found!');
        }else{
            console.error('An error occurred:', err.message);
        }
    }