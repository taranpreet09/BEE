const express = require("express");

const router= express.Router() //smaller version of express app
const Blogs= require("../model/blog");
const Users= require("../model/user");
const {addBlog,readBlog, getOneBlog,deleteBlog}= require("../controller/blogController")
router.post("/",addBlog)
router.get("/",readBlog)
router.get("/:id", getOneBlog )
router.delete("/:blogId",deleteBlog)

 
module.exports=router;