const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-btn");
 
const welcomeMessage = document.getElementById("welcome-message");
const userWelcome = document.getElementById("user-welcome");
const logoutButton = document.getElementById("logout-btn");
 
// Verifica se já existe um usuário logado
function checkLogin() {
  const user = localStorage.getItem("user");
 
  if (user) {
    loginForm.classList.add("hidden");
    welcomeMessage.classList.remove("hidden");
    userWelcome.textContent = `Bem-vindo, ${user}!`;
  } else {
    loginForm.classList.remove("hidden");
    welcomeMessage.classList.add("hidden");
  }
}
 
// Login do usuário
loginButton.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim(); // Senha não é validada no exemplo
 
  if (username && password) {
    localStorage.setItem("user", username);
    checkLogin();
  }
});
 
// Logout do usuário
logoutButton.addEventListener("click", () => {
  localStorage.removeItem("user");
  checkLogin();
});
 
// Verifica o login ao carregar a página
checkLogin();