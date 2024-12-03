document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Pega o valor da entrada
    let taskText = document.getElementById('taskInput').value;

    if (taskText !== "") {
        addTask(taskText);
        document.getElementById('taskInput').value = ""; // Limpa a entrada
    }
});

// Função para adicionar tarefas
function addTask(taskText) {
    const taskList = document.getElementById('taskList');

    // Criação de elementos
    const taskItem = document.createElement('li');
    taskItem.classList.add('list-group-item', 'd-flex', 'align-items-center', 'justify-content-between');

    const taskTextElement = document.createElement('span');
    taskTextElement.classList.add('task-text');
    taskTextElement.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteButton.innerHTML = '<i class="bi bi-trash"></i>';
    deleteButton.onclick = function() {
        taskItem.remove();
    };

    // Adicionar a tarefa ao item da lista
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);

    // Adicionar o item à lista de tarefas
    taskList.appendChild(taskItem);

    // Adicionar funcionalidade de marcar como concluída
    taskTextElement.addEventListener('click', function() {
        taskTextElement.classList.toggle('completed');
    });
}
