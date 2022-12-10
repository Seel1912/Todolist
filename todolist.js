var input = document.querySelector("input")
var button = document.querySelector("button")
var form = document.querySelector("form")
var todo = document.querySelector(".todo")

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let value = input.value.trim()
    if (value) {
        addTodoElement({
            text: value,
        })
        saveTodolist()
    }

    input.value = ""
})

function addTodoElement(todos) {
    var li = document.createElement("li")
    li.innerHTML = `
    <span>${todos.text}</span>
    <i class="fa-solid fa-circle-minus" style="color:red;"></i>
    <i class="fa-solid fa-circle-check" style="color:green;margin-left: 10px;"></i>
    `
    if (todos.status === "completed") {
        li.setAttribute("class", "completed")
    }

    li.addEventListener("click", function () {
        this.classList.toggle("completed")
    })

    li.querySelector("i").addEventListener("click", function () {
        this.parentElement.remove()
    })

    todo.appendChild(li)
}

function saveTodolist() {
    let todoList = document.querySelectorAll("li")
    let todoStorage = []
    todoList.forEach(function (item) {
        let text = item.querySelector("span").innerText
        let status = item.querySelector("span").getAttribute("class")

        todoStorage.push({
            text,
            status,
        })
    })

    localStorage.setItem("todolist", JSON.stringify(todoStorage))
    console.log(localStorage.getItem("todolist"));
}

function create() {
    let data = JSON.parse(localStorage.getItem("todolist"))
    data.forEach(function (item) {
        addTodoElement(item)
    })
}
create()