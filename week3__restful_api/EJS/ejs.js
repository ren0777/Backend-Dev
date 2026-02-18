const express=require('express');
const app=express();

//built in middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//set view engine
app.set('view engine','ejs');   
app.get("/",(req,res)=>{
    res.render("index", { name: "faizan" });
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});