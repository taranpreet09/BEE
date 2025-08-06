//fetch mai 2 baar .then lagta hai

let userContainer = document.querySelector(".usercontainer");
let registerForm = document.querySelector(".register");
let nameInput= document.querySelector(".name");
let usernameInput = document.querySelector(".username");
function getUserData(URL) {
    fetch(URL)
        .then((res) => res.json()) 
        .then((data) => {
            data.forEach(user => {
                displayUser(user); 
            });
        })
        .catch((err) => {
            console.error("Error fetching users:", err);
        });
}

function displayUser(user) {
    let li = document.createElement("li");
    li.setAttribute("class", "user-item");

    li.innerHTML = `
        <div class="user-info">
            <h1>${user.name}</h1>
            <p>${user.username}</p>
        </div>
        <div class="user-btn">
            <button class="user-delete">❌</button>
            <button class="user-edit">✏️</button>
        </div>
    `;

    userContainer.appendChild(li);
}

getUserData('http://localhost:3000/users');

function addUser(name,username){
    let data={
        name:name,
        username:username
    }
    fetch(URL,{
        method:"POST",
        body:JSON.stringify(data),
    })
    .then((res)=>{
        return res.json;
    })
    .then((data)=>{
        console.log(data);
    })
}
registerForm.addEventListener("submit",function(e){
    let name=nameInput.value;
    let username=usernameInput.value;
    addUser(name,username,"http:localhost:3000/adduser");

})