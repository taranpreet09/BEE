const Users= require("../model/user");
module.exports.adduser=async(req,res)=>{
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
}
module.exports.readusers=async(req,res)=>{
    let allusers= await Users.find().populate("blogs");
    res.json({
        success:true,
        data:allusers
        })

}
module.exports.readOne=async(req,res)=>{
    let {id}= req.params;
    let user= await Users.findOne({_id:id}).populate("blogs");
    res.json({
        success:true,
        data:user
        })
    }

