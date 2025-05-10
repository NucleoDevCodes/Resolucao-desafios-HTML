// Dados iniciais (simulando um banco de dados)
let tarefas = [];

// Elementos do DOM
const formTarefa = document.getElementById('formTarefa');
const nomeTarefaInput = document.getElementById('nomeTarefa');
const listaTarefas = document.getElementById('listaTarefas');

// Função para renderizar a lista de tarefas
function renderizarTarefas() {
    listaTarefas.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${tarefa}</span>
            <div>
                <button onclick="editarTarefa(${index})">Editar</button>
                <button onclick="deletarTarefa(${index})">Deletar</button>
            </div>
        `;
        listaTarefas.appendChild(li);
    });
}

// Função para adicionar uma tarefa
formTarefa.addEventListener('submit', (event) => {
    event.preventDefault();
    const nomeTarefa = nomeTarefaInput.value.trim();
    if (nomeTarefa) {
        tarefas.push(nomeTarefa);
        nomeTarefaInput.value = '';
        renderizarTarefas();
    }
});

// Função para editar uma tarefa
function editarTarefa(index) {
    const novoNome = prompt('Digite o novo nome da tarefa:', tarefas[index]);
    if (novoNome) {
        tarefas[index] = novoNome;
        renderizarTarefas();
    }
}

// Função para deletar uma tarefa
function deletarTarefa(index) {
    tarefas.splice(index, 1);
    renderizarTarefas();
}

// Renderizar a lista inicial
renderizarTarefas();