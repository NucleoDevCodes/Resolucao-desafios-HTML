const visitCountText = document.getElementById("visit-count");
const resetButton = document.getElementById("reset-btn");
 
// Recupera o contador ou inicia em 0
let visitCount = parseInt(localStorage.getItem("visitCount")) || 0;
 
// Incrementa o contador e salva no localStorage
visitCount++;
localStorage.setItem("visitCount", visitCount);
 
// Atualiza o texto na tela
visitCountText.textContent = `Você visitou esta página ${visitCount} vezes.`;
 
// Zerar o contador ao clicar no botão
resetButton.addEventListener("click", () => {
    localStorage.setItem("visitCount", 0);
    visitCountText.textContent = "Você visitou esta página 0 vezes.";
});