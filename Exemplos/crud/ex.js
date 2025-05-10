let tarefas = [];

const formTarefa = document.getElementById('formTarefa');
const IputNomeTarefa = document.getElementById('nomeTarefa');
const listaTarefas = document.getElementById('listaTarefas');

function renderizarTarefas() {
    listaTarefas.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li')
        li.innerHTML = `

        <span>${tarefa}</span>
            <div>
                <button onclick="editarTarefa(${index})">Editar</button>
                <button onclick="deletarTarefa(${index})">Deletar</button>
            </div>
        
        
        `
        listaTarefas.appendChild(li)

    });

}


formTarefa.addEventListener( 'submit' ,(event) => {
    event.preventDefault();
    const nomeTarefa = IputNomeTarefa.value.trim()
    if(nomeTarefa) {
        tarefas.push(nomeTarefa)
        IputNomeTarefa.value = ''
        renderizarTarefas()
    }

})


function editarTarefa(index) {
    const novoNome = prompt('Digite algo:' , tarefas[index])
    if(novoNome) {
        tarefas[index] = novoNome
        renderizarTarefas()

    }
}


function deletarTarefa(index) {
    tarefas.splice(index , 1)
    renderizarTarefas()
     
}


renderizarTarefas()
