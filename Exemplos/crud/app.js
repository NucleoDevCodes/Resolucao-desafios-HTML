let users = []; // Array para armazenar os dados dos usuários

// Referências do DOM
const crudForm = document.getElementById('crudForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const crudTableBody = document.getElementById('crudTable').getElementsByTagName('tbody')[0];

// Função para adicionar usuário
function addUser(name, email) {
    const user = {
        id: Date.now(), // Usando o timestamp como ID único
        name: name,
        email: email
    };
    users.push(user);
    renderTable();
}

// Função para editar usuário
function editUser(id) {
    const user = users.find(user => user.id === id);
    if (user) {
        nameInput.value = user.name;
        emailInput.value = user.email;
        crudForm.onsubmit = (e) => {
            e.preventDefault();
            user.name = nameInput.value;
            user.email = emailInput.value;
            renderTable();
            crudForm.onsubmit = handleFormSubmit;
        };
    }
}

// Função para remover usuário
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    renderTable();
}

// Função para renderizar a tabela
function renderTable() {
    crudTableBody.innerHTML = ''; // Limpar a tabela
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="editUser(${user.id})">Editar</button>
                <button onclick="deleteUser(${user.id})">Deletar</button>
            </td>
        `;
        crudTableBody.appendChild(row);
    });
}

// Função que lida com o envio do formulário
function handleFormSubmit(event) {
    event.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    if (name && email) {
        addUser(name, email);
        nameInput.value = '';
        emailInput.value = '';
    }
}

// Adicionar evento de envio do formulário
crudForm.onsubmit = handleFormSubmit;

