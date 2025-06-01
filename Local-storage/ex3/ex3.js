const input = document.getElementById("task-input");
const button = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
 
// Recupera as tarefas salvas no localStorage ou inicia um array vazio
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
 
// Função para renderizar as tarefas na tela
function renderTasks() {
    taskList.innerHTML = ""; // Limpa a lista antes de renderizar
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}
 
// Adiciona uma nova tarefa
button.addEventListener("click", () => {
    const task = input.value.trim();
    if (task) {
        tasks.push(task); // Adiciona ao array
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Salva no localStorage
        input.value = ""; // Limpa o input
        renderTasks(); // Atualiza a lista
    }
});
 
// Renderiza as tarefas ao carregar a página
renderTasks();