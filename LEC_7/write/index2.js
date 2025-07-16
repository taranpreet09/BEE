let users=[
    {
        name:"Taran",
        age:"19",
        address:"Panchkula",
    },
    {
        name:"Anonymous",
        age:"20",
        address:"Delhi",
    }
]

const fs= require("fs")

fs.writeFile("./LEC_7/users2.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("Users data written to file successfully");
});