
const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); 
app.get("/users", (req, res) => {
    fs.readFile("users.json", "utf-8", (err, data) => {
        if (err) res.send(err);
        else {
            let allusers = JSON.parse(data);
            res.json(allusers);
        }
    });
});

app.post("/adduser", (req, res) => {
    try {
        let name = req.body.name;
        let username = req.body.username;
        let newuser = {
            id: Math.random() * 100000,
            name: name,
            username: username,
            role: "user",
        };
        let alluser = [];
        let data = fs.readFileSync("./users.json", "utf-8");
        if (data) {
            alluser = JSON.parse(data);
        }
        alluser.push(newuser);
        fs.writeFileSync("./users.json", JSON.stringify(alluser));
        res.send("User added");
    } catch (error) {
        return res.send(error);
    }
});

app.listen(3000, () => {
    console.log("server started");
});
