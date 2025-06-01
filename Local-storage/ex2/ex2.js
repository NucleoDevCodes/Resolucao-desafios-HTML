const body = document.body;
const lightBtn = document.getElementById("light-mode");
const darkBtn = document.getElementById("dark-mode");
 
// Função para aplicar o tema
function aplicarTema(tema) {
    if (tema === "dark") {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
    localStorage.setItem("tema", tema);
}
 
// Carrega o tema salvo ao iniciar
const temaSalvo = localStorage.getItem("tema") || "light";
aplicarTema(temaSalvo);
 
// Eventos dos botões
lightBtn.addEventListener("click", () => aplicarTema("light"));
darkBtn.addEventListener("click", () => aplicarTema("dark"));