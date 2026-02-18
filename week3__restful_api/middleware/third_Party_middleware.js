const express=require('express');
const cors=require("cors");
const app=express();

//allow all origin
app.use(cors());

//CORS=CROSS-ORIGIN RESOURCE SHARING

app.get("/data",(req,res)=>{
    res.json({message:"This is data from the server"});
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});


//specific origin allow karna hai to
//ONLY EXECUTE REACT/VITE APP FROM THIS ORIGIN
app.use(cors({
    origin:"http://localhost:5173"
}));

    //MULTIPLE ORIGIN ALLOW KARNA HAI TO
const allowedOrigins=["http://localhost:5173","http://localhost:3000"];
app.use(cors({
    origin:allowedOrigins
}));