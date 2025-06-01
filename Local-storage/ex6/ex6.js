const nameInput = document.getElementById("name-input");
const saveButton = document.getElementById("save-name");
const nameDisplay = document.getElementById("name-display");
 
// Função para exibir o nome salvo
function displayName() {
    const savedName = localStorage.getItem("name");
    nameDisplay.textContent = savedName ? `Nome: ${savedName}` : "Nenhum nome salvo.";
}
 
// Salva o nome no localStorage
saveButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name) {
        localStorage.setItem("name", name);
        displayName();
    }
});
 
// Atualiza em tempo real quando outra aba modifica o nome
window.addEventListener("storage", (event) => {
    if (event.key === "name") {
        displayName();
    }
});
 
// Exibe o nome salvo ao carregar a página
displayName();