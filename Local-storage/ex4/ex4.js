const input = document.getElementById("color-input");
const addButton = document.getElementById("add-color");
const colorList = document.getElementById("color-list");
 
// Recupera as cores salvas ou inicia um array vazio
let colors = JSON.parse(localStorage.getItem("colors")) || [];
 
// Função para renderizar as cores na tela
function renderColors() {
  colorList.innerHTML = ""; // Limpa a lista antes de renderizar
  colors.forEach((color, index) => {
    const li = document.createElement("li");
    li.textContent = color;
 
    // Botão de remover cor
    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.classList.add("remove");
    removeButton.addEventListener("click", () => removeColor(index));
 
    li.appendChild(removeButton);
    colorList.appendChild(li);
  });
}
 
// Adiciona uma nova cor
addButton.addEventListener("click", () => {
  const color = input.value.trim();
  if (color) {
    colors.push(color); // Adiciona ao array
    localStorage.setItem("colors", JSON.stringify(colors)); // Salva no localStorage
    input.value = ""; // Limpa o input
    renderColors(); // Atualiza a lista
  }
});
 
// Remove uma cor específica
function removeColor(index) {
  colors.splice(index, 1); // Remove a cor do array
  localStorage.setItem("colors", JSON.stringify(colors)); // Atualiza o localStorage
  renderColors(); // Atualiza a lista na tela
}
 
// Renderiza as cores ao carregar a página
renderColors();