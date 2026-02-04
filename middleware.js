export let mid=(req,res,next)=>{
    console.log(req.method)
    console.log("this is my middleware");
    next();
}

export let validatePost=(req,res,next)=>{
    let {name,city}=req.body;

    if(!name || !city){
        return res.status(400).json({message:"name and city are required"})
    }
    next();
}