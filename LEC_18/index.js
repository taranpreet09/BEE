const express = require("express");
const mongoose=require("mongoose")
const app= express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const Blogs= require("./model/blog");
const Users= require("./model/user");
const user = require("./model/user");
app.post("/blogs",async(req,res)=>{
    let {title, body,userId} = req.body;
    let userExists= await Users.findById(userId);
    if(userExists){
    let newBlog= new Blogs({
        title:title,
        body:body,
        date: Date.now(),
        userId:userId
    })
    await newBlog.save();
    userExists.blogs.push(newBlog._id);
    await userExists.save();
    res.json({
        success: true,
        data: newBlog,
        message:"Blog created successfully",
    })
}
})
app.get("/blogs/",async(req,res)=>{
    let allblog= await Blogs.find();
    res.json({
        success:true,
        data:allblog
    })
})
app.get("/blogs/:id",async(req,res)=>{
    let {id}= req.params;
    let blog= await Blogs.findOne({_id:id});
    res.json({
        success:true,
        data:blog
    })

})
app.post("/users",async(req,res)=>{
    let {username,email,password}=req.body; 
    let newUser= new Users({
        username:username,
        email:email,
        password:password
        })
        await newUser.save();
        res.json({
            success:true,
            data:newUser,
            message:"User created successfully"
        })
})

app.get("/users/",async(req,res)=>{
    let allusers= await Users.find().populate("blogs");
    res.json({
        success:true,
        data:allusers
        })

})
app.get("/users/:id",async(req,res)=>{
    let {id}= req.params;
    let user= await Users.findOne({_id:id}).populate("blogs");
    res.json({
        success:true,
        data:user
        })

})

app.delete("/blogs/:blogId", async (req, res) => {
    let {blogId} = req.params;
    let {userId}= req.body;
    let blogExist= await Blogs.finsdById(blogId);
    if(!blogExist)
        return res.json({
            success: false,
            message: "Blog not found!"
        });
        if (blogExist.userId.toString() !== userId) return res.json({
            success: false,
            message: "You are not authorized to delete this blog!"
        })
        await Blogs.findByIdAndDelete(blogId);
        let userExist=await user.findById(userId);
        let blog = userExist.blogs.filter((id) => id !== blogId);
        userExist.blogs=blog 
        await  userExist.save();
        console.log("bbbbbbbbbbb");
        res.json({
            success: true,
            message: "Blog deleted successfully!",
            data:userExist
        })
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
mongoose.connect('mongodb://127.0.0.1:27017/database')
  .then(() => console.log('Connected!'));


  //user schema ki file banani hai email, username, password 3 routes u

//  app.post
//  app.get
//  app.get id se
