

// Datos de ejemplo (usuario válido)
const USERNAME = "admin";
const PASSWORD = "1234*";

const form = document.getElementById("loginForm");
const message = document.getElementById("message");
const notification = document.getElementById("notification");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const userInput = document.getElementById("username").value;
  const passInput = document.getElementById("password").value;

  if (userInput === USERNAME && passInput === PASSWORD) {
    
    window.location.href="/Pagina-inicio/index.html";
   
  } else {
    message.textContent = "❌ Usuario o contraseña incorrectos.";
    message.style.color = "red";
  }
});
