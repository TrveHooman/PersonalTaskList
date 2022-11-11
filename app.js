// *adding Slectors
const taskInput = document.querySelector('#newTask');
const taskForm = document.querySelector('#taskForm');
const filterTasksInput = document.querySelector('#filterTasks');
const clearBtn = document.querySelector('#clearTasks');
const taskList = document.querySelector('#tasks');

// *adding Event Listeners
loadEventListeners();

function loadEventListeners() {
  taskForm.addEventListener('submit', addTask);
  clearBtn.addEventListener('click', clearTasks);
  filterTasksInput.addEventListener('keydown', filterTasks);
}

// *Adding EventListeners' Functions
function addTask(e) {
  if(taskInput.value === '') {
    alert('Please enter a task below');
  } else {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    li.innerHTML = taskInput.value;
    taskList.appendChild(li);
    
    const remLink = document.createElement('a');
    remLink.href = "#";
    const remBtn = document.createElement('i');
    remLink.appendChild(remBtn);
    remBtn.classList.add('bi', 'bi-x');
    
    const doneLink = document.createElement('a');
    doneLink.href = "#";
    const doneBtn = document.createElement('i');
    doneLink.appendChild(doneBtn);
    doneBtn.classList.add('bi', 'bi-check');
    
    buttonDiv = document.createElement('div');
    buttonDiv.appendChild(remLink);
    buttonDiv.appendChild(doneLink);
    li.appendChild(buttonDiv);
    
    e.preventDefault();
  }
  e.preventDefault();
}

function clearTasks() {
  taskList.innerHTML = '';
}



