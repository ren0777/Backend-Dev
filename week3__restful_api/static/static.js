const express=require('express');
const app=express();

//serve files from the "public" directory

//Absolute path dena hoga
//relative path ./path

const staticPath=__dirname+"/public";

app.use(express.static(staticPath));

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
