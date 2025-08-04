//fetch mai 2 baar .then lagta hai

let userContainer = document.querySelector(".usercontainer");

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
