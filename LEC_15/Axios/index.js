const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.post("/blog",(req,res)=>{
    console.log(req.body);
    let title=req.body.title;
    let desciption=req.body.description;
    console.log(title,desciption);
    res.json({
        success:true,
        message:"Blog created successfully",
    })
})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

