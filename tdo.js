document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();


  if (taskText !== '') {
    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    newTask.textContent = taskText;  


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    
    /* css styles for the delete button*/
    deleteButton.style.background = 'red';
    deleteButton.style.padding = '5px 9px';
    deleteButton.style.marginLeft = '10px';
    
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });


    newTask.appendChild(deleteButton);
    newTask.addEventListener('click',function() {
        newTask.classList.toggle('completed');
    });


    taskList.appendChild(newTask);
    taskInput.value = '';
  }

});
