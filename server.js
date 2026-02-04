

import express from "express"
import {userdata} from "./data.js";

const app=express();

// let mid=(req,res,next)=>{
//     console.log(req.method)
//     console.log("this is my middleware");
//     next();
// }

// let validatePost=(req,res,next)=>{
//     let {name,city}=req.body;

//     if(!name || !city){
//         return res.status(400).json({message:"name and city are required"})
//     }
//     next();
// }


//solid principle -> single responsibility principle 
import {mid} from "./middleware.js"
app.use(mid);  //mounting middleware globally

import {validatePost} from "./middleware.js"

app.use(express.json()); //middleware to parse json data from request body

app.get("/",(req,res)=>{
    res.send("home route")
})

app.get("/user",(req,res)=>{
    return res.json(userdata)
})
app.get("/user/:id",(req,res)=>{

    const id = Number(req.params.id);

    const user=userdata.find((ele)=> ele.id === id);
    // let user={                 //javascript object
    //     name:"faizan",
    //     age:20,
    //     city:"agra"
    // }
   
    if(!user){
        res.json({message:"user not found"})
    }
     return res.json(user)  
})

//http://localhost:3000/search?name=luffy&city=laughtale
app.get("/search",(req,res)=>{ 
    const name = req.query.name;
    const city=req.query.city;
    console.log(req.query);
    res.send({name,city});//object shorthand property
 }
)

app.get("/dashboard",(req,res)=>{
    res.send("this is my dashboard")
})



//post request
//post request is used to send data to the server. It is used to create a new resource on the server. 
// It is also used to submit a form on the client side. The data sent to the server with post request is stored in the request body.
//  The post request is not idempotent, which means that it can have different results if it is called multiple times. 
// The post request is also not cacheable, which means that it cannot be cached by the browser or any intermediate cache.



app.post('/user',(req,res)=>{
    
    // let usernewData=req.body;
    // console.log(usernewData);
    //  res.json({message:"data received successfully",data:usernewData})

    let {id,name,city}=req.body;

    if(!name || !city){
        return res.status(400).json({message:"name and city are required"})
    }
    let newUserdata={
        id:userdata.length+1,
        name:name,
        city:city
    }
    userdata.push(newUserdata);

    res.status(200).send("user created successfully")
})

//req-> middleware -> route handler -> response




app.listen(3000,()=>{
    console.log("server is running");
})