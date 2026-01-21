// Task 3: Campus Placement Student API (Most Asked in Interviews)Scenario
// Your college placement cell wants a backend system to manage student data during campus drives.Requirements
// Create a Node.js server that:Uses http module to create serverSupports following APIs:
// GET /students → return all students
// GET /students/:id → return single student
// POST /students → add new student
// DELETE /students/:id → remove student
// Store data in-memory (array)
// Use JSON response
// Handle 404 routes
// Log every request to log.txt using fs module


const http = require("http"); // Importing the HTTP module
const fs = require("fs");    
const url=require("url");
const { parse } = require("path");

let students = [
    { id: 1, name: "Alice", age: 21 },
    { id: 2, name: "Bob", age: 22 }
];

const server = http.createServer((req,res)=>{
    const myurl=url.parse(req.url,true);
    const path=myurl.pathname;
    const method=req.method;

    // Log every request to log.txt
    const logEntry = `${new Date().toISOString()} - ${method} ${path}\n`;
    fs.appendFile('log.txt', logEntry, (err)=>{
        if(err) console.log("Error logging request:", err);
    });

    if(method==="GET" && path==="/students"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(students));
    }
    else if(method==="GET" && path.startsWith("/students/")){
        const id= parseInt(path.split("/")[3]);
        const student=students.find(s=>s.id===id);
        if(student){
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify(student));
        }else{
            res.writeHead(404, {"Content-Type": "application/json"});
            res.end(JSON.stringify({error:"Student not found"}));
        }
    }
    else if(method==="POST" && path==="/students"){
        let body="";
        req.on("data", chunk=>{
            body+=chunk.toString();
        }
        );
        req.on("end", ()=>{
            const newStudent=JSON.parse(body);
            students.push(newStudent);
            res.writeHead(201, {"Content-Type": "application/json"});
            res.end(JSON.stringify(newStudent));
        });
    }
    else if(method==="DELETE" && path.startsWith("/students/"))
    {
        const id= parseInt(path.split("/")[3]);
        const index=students.findIndex(s=>s.id===id);
        if(index!==-1){
            const deletedStudent=students.splice(index,1);
            res.writeHead(200, {"content-type": "application/json"});
            res.end(JSON.stringify(deletedStudent[0]));
        }else{  
            res.writeHead(404, {"content-type": "application/json"});
            res.end(JSON.stringify({error:"Student not found"}));
        }
    }
    else{
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({error:"Route not found"}));
    }
});

server.listen(4000, ()=>{
    console.log("Server started at port 4000");
});