//const express =require('express');
import express from "express";
const app=express();

app.use(express.json());

//CREATE CREDENTAITIALS

let credentials=[
    { email:"faizan@gmail.com",password:"Faizan123"},
        {email:"fa@gmai.com",password:"Faizan1234"}
];

//get request to fetch all credentials

app.get("/auth/users",(req,res)=>{
    res.json({message:"user fetch successful",credentials});
});

//reset password using put request
app.put("/auth/reset", (req,res)=>{
    const {email,password,newPassword}=req.body;

        const user=credentials.find(
            (cred) => cred.email==email && cred.password==password
        );
        if(!user){
            return res.status(400).json({message:"Invalid email or password"});
        }

        //update password
        user.password=newPassword;
        res.json({message:"Password update successful", user});
    });

    //email reset
app.put("/auth/emailreset", (req,res)=>{
    const {email,password,new_email}=req.body;

        const user=credentials.find(
            (cred) => cred.email==email && cred.password==password
        );
        if(!user){
            return res.status(400).json({message:"Invalid email or password"});
        }

        //update email
        user.email=new_email;
        res.json({message:"email update successful", user});
    });

//forgot password using put request

app.put("/auth/forgot",(req,res)=>{
    const {email,newPassword}=req.body;
    const user = credentials.find((cred)=> cred.email==email);
    if(!user){
        return res.status(400).json({message:"email not found"});
    }
    user.password=newPassword;
    res.json({message:"Password reset successful", user});
});
    

app.listen(7000,()=>console.log("Server started on port 7000"));





