let username = document.querySelector(".username")
let password = document.querySelector(".password")
let login = document.querySelector(".login")

login.addEventListener("click", (e) => {
    e.preventDefault();
    let user = {
        username: username.value,
        password: password.value,
    };
    let json = JSON.stringify(user);
    if (!username.value || !password.value) {
        alert("Please enter full information");
    } else {
        localStorage.setItem(username.value, json);
        alert("Register Succes");
        window.location.href = "login.html";
    }
});
