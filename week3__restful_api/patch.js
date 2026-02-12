const express = require('express');
const app=express();
app.use(express.json());
let students=[
    {id:1,name:"aman", marks:60, city:"hyderabad"},
    {id:1,name:"aman", marks:60, city:"hyderabad"}
];
//view studetn s
app.get("/students",(req,res)=>{
    res.json(students)
});
//patch - update any one field 
app.patch("/students/:id",(req,res)=>{
const id=req.params.id;
const updates=req.body;
const student=students.find((s)=>s.id ==id);
if(!student){
    return res.status(404).json({message:"Student not found"});
}

//apply updates
Object.assign(student,updates);
res.json({message:"Student updated successfully",student});
});
app.listen(8000,()=>console.log("Server Started"));
