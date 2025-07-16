const fs = require("fs");

fs.readFile("./LEC_7/users.txt", "utf-8", function (err, data1) {
    if (err) return console.log(err);
    let users= JSON.parse(data1);
    console.log(users);  

fs.readFile("./LEC_7/users2.txt", "utf-8", function (err, data2) {
    if (err) return console.log(err);
    let users= JSON.parse(data1);
    console.log(users);  


const combinedData = data1 + data2;

fs.writeFile("./LEC_7/users3.txt",combinedData,function(err){
    if(err) return console.log(err);
    console.log("Users data written to file successfully");
});
}); 
}); 