const express=require("express");
const res = require("express/lib/response");

const server=express();

// server.get("/",(req,res)=>{
//     res.send("hello world")
// })

// server.get("/",(req,res)=>{
//     res.send('my name is rinkal')
// })

// server.get("/",(req,res)=>{
//     res.send('<h1> hello bhai ye heading hai </h1>')   
// })

const middleware1=(req,res,next)=>{
    console.log("hello this is middleware1");
    next()
}

const middleware2=(req,res,next)=>{
    console.log("this is middleware 2");
    next()
}

server.use(middleware1)

server.get('/user',middleware2,(req,res)=>{
    res.send({name:'rinkal',id:23,course:'MERN'})
})

server.listen(3001,()=>{
    console.log("server works properly");
})