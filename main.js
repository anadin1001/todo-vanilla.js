let users = [
    {
        id: 1,
        name: "Mihai",
        email: "mihai.gheorghe@csie.ase.ro",
        password: "Mihai1!"
    },
    {
        id: 2,
        name: "Elena",
        email: "elena@gmail.com",
        password: "Elena1!"
    },
]

let toDos = [
    {
        id: 1,
        taskName: "do the dishes",
        status: "to-do",
        responsible: "Mihai"
    },
    {
        id: 2,
        taskName: "do the laundry",
        status: "to-do",
        responsible: "Mihai"
    },
    {
        id: 3,
        taskName: "do the homework",
        status: "in progress",
        responsible: "Elena"
    },
    {
        id: 4,
        taskName: "binging",
        status: "done",
        responsible: "Elena"
    },
]

import { login } from "./Login/login.js";
const loginButton = document.getElementById("loginSubmit");
loginButton.addEventListener('click', login);

