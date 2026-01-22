console.log("first")

function login(cb){
    setTimeout(()=>{
        console.log("login")
        cb();
    },2000)
}
function getUserDetails(cb){
    setTimeout(()=>{
        console.log("user detail")
        cb();
    },1000)
}
function password(){
    setTimeout(()=>{
        console.log("passwword")
    },3000)
}

login(()=>{
    getUserDetails(()=>{
        console.log("end")
    })
})

setTimeout(()=>{

console.log("user detail")

},1000)
console.log("end")