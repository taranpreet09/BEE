const express=require ("express");
const cors = require("cors");

const fs=require("fs");
const app=express()
app.use(cors());
app.get("/users",(req,res)=>{
    fs.readFile("users.json","utf-8",(err,data)=>{
        if(err) res.send(err);
        let allusers=JSON.parse(data);
        res.json(allusers);
    });
})
app.listen(3000,()=>{
    console.log("server started") 
})