const express=require('express');
const app=express();
app.use((req,res , next)=>{
    console.log("MIDDDLELWARE1");
    next();
});
app.use((req,res , next)=>{
    console.log("MIDDDLELWARE2");
    next();
});

app.get("/test",(req,res)=>{
    res.send("Hello World");
});
app.listen(8000,()=>console.log("Server Started"));