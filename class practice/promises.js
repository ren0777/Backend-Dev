function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login")
            resolve()
        },1000)
    })
}
function getUserDetails(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("user detail")
            resolve()
        },2000)
    })
}
function password(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("password")
            resolve()
        },3000)
    })
}
// login().then(()=>{
//     return getUserDetails()
// }).then(()=>{
//     return password()
// }).then(()=>{
//     console.log("alll task done")
// }).catch((error)=>{
//     console.log("error found")
// })// Promises

//async await use try catch for error handling

async function run(){
try{
    await login()
    await getUserDetails()
    await password()
    console.log("all task done")
}
catch(error){
    console.log("error found")
}
}
run()