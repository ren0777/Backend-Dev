//post request
//post request is used to send data to the server. It is used to create a new resource on the server. 
// It is also used to submit a form on the client side. The data sent to the server with post request is stored in the request body.
//  The post request is not idempotent, which means that it can have different results if it is called multiple times. 
// The post request is also not cacheable, which means that it cannot be cached by the browser or any intermediate cache.

import express from 'express';

const app=express();

app.post('/user',(req,res)=>{
    
})