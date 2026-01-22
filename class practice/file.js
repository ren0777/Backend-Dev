const fs=require("fs");

fs.writeFileSync("./example.txt","Hello World!");
// const result=fs.readFileSync("./unknown.txt","utf8");
// console.log("File content", result);

// fs.readFile("./unknown.txt", "utf8", (err,result) => {
//     if(err){
//         console.log("error reading file:", err);
//     }
//     else{
//         console.log("File content", result);
//     }
// })

// use a template literal and the correct Date API; use sync append for simplicity
// fs.appendFileSync("./Notes.txt", `${Date.now()} hey here!\n`);
 //fs.cpSync("./example.txt", "./examplecopy.txt");
// fs.unlinkSync("./examplecopy.txt");


//blocking
// console.log("1");
// const result=fs.readFileSync("./example.txt","utf8");
// console.log(result);
// console.log("2")

//non blocking
console.log("1");
fs.readFile("./example.txt","utf8",(arr,result)=>)

const os=require("os");
console.log(os.cpus().length)

                                                            