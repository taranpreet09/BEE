const Blogs= require("../model/blog");
module.exports.addBlog= async(req,res)=>{
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
}
module.exports.readBlog= async(req,res)=>{
    let allblog= await Blogs.find();
    res.json({
        success:true,
        data:allblog
    })
}
module.exports.getOneBlog=async(req,res)=>{
    let {blogId} = req.params;
    let {userId}=req.body;
    // console.log(blogId)
    let blogExist = await Blogs.findById(blogId);
    // console.log(blogExist)
    if(!blogExist) return res.json({
        success:false,
        message:"Blog not found"
    })
    if(blogExist.userId!=userId) return res.json({
        success:false,
        message:"You are not the owner of this blog"
        })
        await Blogs.findByIdAndDelete(blogId);
        
        let userExist = await Users.findById(userId);
        let blog = userExist.blogs.filter((id)=>id!=blogId)
        userExist.blogs=blog;
        await userExist.save();
      
        res.json({
            success:true,
            message:"Blog deleted successfully",
            data:userExist
        });
    }
    module.exports.deleteBlog=async(req,res)=>{
        let {id}= req.params;
        let blog= await Blogs.findOne({_id:id});
        res.json({
            success:true,
            data:blog
        })
    
    }
   