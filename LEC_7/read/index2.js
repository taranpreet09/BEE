const fs= require("fs");
fs.readFile("./LEC_7/users2.txt", "utf-8", function (err, data) {
    if (err) return console.log(err);
    // console.log(data[0]);
    let users= JSON.parse(data);
    // console.log(users);  
    console.log(users[0].name);
}); 