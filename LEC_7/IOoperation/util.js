const fs= require("fs");
const {read} = require("../IOoperation/util");


function read(filepath){
    return new Promise((resolve, reject) => {
        fs.readFile("./LEC_7/users.txt", "utf-8", function (err, data) {
            if (err) return console.log(err);
            console.log(data[0]);
            let users=JSON.parse(data);
            resolve(users);
        })
    })
}

// function write(filepath, data){



async function readFile(filepath){ 
    let data=await read(filepath);
    console.log(data);
}