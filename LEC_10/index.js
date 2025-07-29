const express = require ("express");
const app = express();
app.use(express.static(__dirname + "/public")); //static folder ko browser pe bhejne ke liye

app.use(express.urlencoded({ extended: true })); // to send form data to server
app.use(express.json());


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/addUser", (req, res) => {
    res.sendFile(__dirname + "/addUser.html");
});
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
});

app.post("/add-user", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;

  res.json({
    name: name,
    email: email
  });
});



app.listen(4444,() => {
  console.log('Server is running on port 4444');
});
