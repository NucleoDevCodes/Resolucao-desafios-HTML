const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const saveButton = document.getElementById("save-data");
const clearButton = document.getElementById("clear-data");
const dataDisplay = document.getElementById("data-display");
 
// Função para exibir os dados salvos
function displayData() {
  const name = localStorage.getItem("name");
  const age = localStorage.getItem("age");
 
  if (name && age) {
    dataDisplay.textContent = `Nome: ${name}, Idade: ${age}`;
  } else {
    dataDisplay.textContent = "Nenhum dado encontrado.";
  }
}
 
// Salva os dados no localStorage
saveButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
 
  if (name && age) {
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    displayData();
  }
});
 
// Limpa todos os dados do localStorage
clearButton.addEventListener("click", () => {
  localStorage.clear();
  displayData();
});
 
// Exibe os dados ao carregar a página
displayData();