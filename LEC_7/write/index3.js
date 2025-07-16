const fs = require("fs");

fs.readFile("./LEC_7/users.txt", "utf-8", function (err, data) {
    if (err) return console.log(err);
    let users1= JSON.parse(data);
    console.log(users1);  

fs.readFile("./LEC_7/users2.txt", "utf-8", function (err, data) {
    if (err) return console.log(err);
    let users2= JSON.parse(data);
    console.log(users2);  

let allusers= users1.concat(users2)  // const combined data = data1+ data2

fs.writeFile("./LEC_7/users3.txt",JSON.stringify(allusers),function(err,data){
    if(err) return console.log(err);
    console.log("Users data written to file successfully");
});
}); 
}); 