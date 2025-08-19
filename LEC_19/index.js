const express = require("express");
const mongoose=require("mongoose")
const app= express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const Blogs= require("./model/blog");
const Users= require("./model/user");
const blogRoute= require("./routes/blogRoutes")
app.use("/api/blogs",blogRoute)
const userRoute= require("./routes/usersRoutes")
app.use("/api/users",userRoute)


    app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
mongoose.connect('mongodb://127.0.0.1:27017/database')
  .then(() => console.log('Connected!'));


  