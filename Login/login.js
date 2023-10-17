import { users } from "../Database/users.js";

export function login(e) {
  e.preventDefault(); // face ca elementul sa ramana in consola
  const loginEmail = document.getElementById("loginEmail");
  const logindPassword = document.getElementById("loginPassword");
  console.log(
    `Vrei sa te autentifici cu ${loginEmail.value} si ${logindPassword.value} `
  );

  const user = users.filter(function (user) {
    return user.email === loginEmail.value;
  });
  if (user[0]) {
    console.log("utilizator gasit: ", user[0]);
    if (user[0].password === logindPassword.value) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", user[0].name);
      document.getElementById("login").setAttribute("hidden", true);
      document.getElementById("register").setAttribute("hidden", true);
      document.getElementById("user").removeAttribute("hidden");
      document.getElementById("greetings").textContent =
        "Salut " + localStorage.getItem('username');
    }
  } else {
    console.log("Utilizator negasit!");
  }
}
