//when you want to delete data from the server, you can use the delete method of the express js

const express = require('express');
const app=express();
app.use(express.json()); //parameter to parse the json data from the request body

let students=[
    {id:15,name:"aman", marks:60, city:"hyderabad"},
    {id:20,name:"srdd", marks:80, city:"delhi"},
    {id:30,name:"aman", marks:60, city:"hyderabad"}
];
//view studetn s
app.get("/students",(req,res)=>{
    res.json(students); //fetch students from the server and send it to the client as a json response
});
//delete a student by id
app.delete("/students/:id",(req,res)=>{
    const id=req.params.id; //get the id from the request parameters2
    const index=students.findIndex((s)=>s.id==id); //find the index of the student with the given id
    console.log("index",index);
    if(index===-1){ //array ki tarah find karna hai, agar student nahi mila to -1 return karega
        return res.status(404).json({message:"Student not found"}); //agar student nahi mila to 404 status
        //  code ke sath error message bhej do

    }
    const deletedStudent=students.splice(index,2); //splice method se student ko array se delete kar do   0-index 1- number of elements to be deleted
    console.log("deletedStudent",deletedStudent);
    res.json({message:"Student deleted successfully",deletedStudent:deletedStudent[0]}); //delete hone ke baad success message aur deleted student ka data bhej do
})
app.listen(3000,()=>console.log("Server Started")); //server ko 8000 port par start kar do, aur console me message print kar do ki server start ho gaya hai