const express = require("express");

const router= express.Router();
const Blogs= require("../model/blog");
const Users= require("../model/user");

const {adduser,readusers, readOne}= require("../controller/userController")

router.post("/",adduser)

router.get("/",readusers)
router.get("/:id",readOne)
module.exports=router;