// Solicita um nome ao usuário
let nome = prompt("Digite seu nome:");  

// Salva o nome no Local Storage
localStorage.setItem("nome", nome);  

// Recupera e exibe o nome salvo
let nomeSalvo = localStorage.getItem("nome");  
console.log("Nome salvo:", nomeSalvo);