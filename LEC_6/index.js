const fs = require ('fs');
fs.writeFile("../demo.txt","g26 hello", function(err){
    if(err) return console.log(err);
    console.log("File created successfully");
})