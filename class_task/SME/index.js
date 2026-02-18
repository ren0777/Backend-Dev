const express=require('express');
const fs= require('fs'); 
const users=require('./Mock_DATA.json');
const app=express();
app.use(express.urlencoded({extended:false}));

//REST API
//get method

//app.get('/users',(req,res)=>{
app.get('/api/users',(req,res)=>{
    res.json(users);
});

app.get('/users',(req,res)=>{
    const html= `
    <ul>
        ${users.map(user=> `<li>${user.first_name} ${user.last_name}</li>`).join('')}
    </ul>`;
    res.send(html);
});
app.get('/api/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users.find((u)=>u.id==id);
    return res.json(user);
});

app.post('/api/users',(req,res)=>{
    //TODO: Create a new user
    const {first_name,last_name,email,gender,job_title}=req.body;

    const newUser={
        id:users.length+1,
        first_name,
        last_name,
        email,
        gender,
        job_title
    };
    users.push(newUser);
    fs.writeFile('./Mock_DATA.json',JSON.stringify(users,null,2),()=>res.status(201).json({msg:'User created successfully',user:newUser}));


});

app.patch('/api/users/:id',(req,res)=>{
    //TODO: Update user with the given id
    const id=req.params.id
    const user=users.find((u)=>u.id==id);
    if(!user){
        return res.status(404).json({msg:'User not found'});
    }
    const {first_name,last_name,email,gender,job_title}=req.body;
    const updatedUser={
        ...user,
        first_name, 
        last_name,
        email,
        gender,
        job_title
    };
    const updatedUsers=users.map(u=>u.id==id?updatedUser:u);
    fs.writeFile('./Mock_DATA.json',JSON.stringify(updatedUsers,null,2),()=>res.status(201).json({msg:'User updated successfully',user:updatedUser}));
});

app.delete('/api/users/:id',(req,res)=>{
    //TODO: Delete user with the given id
    const id=req.params.id;
    const updatedUsers=users.filter(u=>u.id!=id);
    fs.writeFile('./Mock_DATA.json',JSON.stringify(updatedUsers,null,2),()=>res.status(201).json({msg:'User deleted successfully'}))        ;
});

//Save API with same path but different HTTP method
// app.route('/api/users')
//     .post((req,res)=>{
//         const id=req.params.id;
//          const user=users.find((u)=>u.id==id);
//         return res.json({msg:'User created successfully'});
//     })
//     .patch((req,res)=>{
//         return res.json({msg:'User updated successfully'});
//     })
//     .delete((req,res)=>{
//         return res.json({msg:'User deleted successfully'});
//     });


app.listen(8000,()=> console.log('server is running on port 8000'));