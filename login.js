let username = document.querySelector(".username")
let password = document.querySelector(".password")
let login = document.querySelector(".login")

login.addEventListener("click", (e) => {
    e.preventDefault();
    let user = {
        username: username.value,
        password: password.value,
    };
    console.log(user);
    let json = JSON.stringify(user);
    if (!username.value || !password.value) {
        alert("Please enter full information");
    }
    if (localStorage.getItem(username.value) == json) {
        alert("Login Success");
        window.location.href = "todolist.html";
    } else {
        alert("Wrong Username Or Password");
    }
});