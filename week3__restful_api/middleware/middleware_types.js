const express=require('express');
const { message } = require('statuses');
const app=express();
app.use(express.json());

//types of middleware

//Built-in middleware - express.json() - JSON data ko parse karta hai request body se

app.use(express.json());
app.use(express.urlencoded({extended:true})); //form data ko parse karta hai

//1. Application-level middleware  har request ke liye run hota hai

app.use((req,res,next)=>{
    console.log("Application-level middleware/n Request URL:", req.url);
    console.log("Request method:", req.method);
    next();
});
app.get("/home",(req,res)=>{
    res.send("Welcome to the Home Page");
});

//Route-level middleware - specific route ke liye run hota hai  check login ho rha hau ki nhi

const checklogin=(req,res,next)=>{
    const isLoggedin=true; //ye condition aapke authentication logic pe depend karega
    if(!isLoggedin){
        return res.status(401).send("please login first")
    }
    next();
};
app.get("/dashboard",checklogin,(req,res)=>{
    res.send("Welcome to the Dashboard");
});


//AUTHENTICATION MIDDLEWARE - user authentication ke liye use hota hai

const authMiddlewar=(req,res,next)=>{
    const token=req.header.authorization;
    if(!token){
        return res.status(401).send({message:"Unauthorized , Token required"});
    }
    if(token !== "faizan"){
        return res.status(401).json({message:"Invalid token"});
    }
    next();
};
app.get("/profile",authMiddlewar,(req,res)=>{
    res.json("Welcome to your profile");
});

//error handling middleware - error ko handle karta hai
app.get("/error",(req,res)=>{
    throw new Error("Something went wrong");
});
app.use((error,req,res,next)=>{
    console.log("Error handling middleware:", error.message);
    res.status(500).json({message:"Internal Server Error"});
}); 


app.listen(8000,()=>console.log("Server Started"));

//