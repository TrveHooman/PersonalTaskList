// *adding Slectors
const taskInput = document.querySelector('#newTask');
const taskForm = document.querySelector('#taskForm');
const taskList = document.querySelector('#tasks');
const filterInput = document.querySelector('#filterTasks');
const clearBtn = document.querySelector('#clearTasks');

// *adding Event Listeners
loadEventListeners();

function loadEventListeners() {
  taskForm.addEventListener('submit', addTask);
  clearBtn.addEventListener('click', clearTasks);
  filterInput.addEventListener('keyup', filterTasks);
}


// *Adding EventListeners' Functions
function addTask(e) {
  if(taskInput.value === '') {
    alert('Please enter a task below');
  } else {
    // *li element
    const li = document.createElement('li');
    li.id = 'listElement';
    li.className = 'list-group-item position-relative';
    li.appendChild(document.createTextNode(taskInput.value));
    
    // *buttons
    const remLink = document.createElement('a');
    remLink.href = "#";
    const remBtn = document.createElement('i');
    remLink.appendChild(remBtn);
    remBtn.className = 'bi bi-x';
    remBtn.addEventListener('click', removeTask);
    
    const doneLink = document.createElement('a');
    doneLink.href = "#";
    const doneBtn = document.createElement('i');
    doneLink.appendChild(doneBtn);
    doneBtn.className = 'bi bi-check';
    doneBtn.addEventListener('click', removeTask);
    
    buttonDiv = document.createElement('div');
    buttonDiv.appendChild(remLink);
    buttonDiv.appendChild(doneLink);
    buttonDiv.className = 'position-absolute top-50 end-0 translate-middle';
    li.appendChild(buttonDiv);
    taskList.appendChild(li);

    addToLs(taskInput.value);
    taskInput.value = '';
  }
  e.preventDefault();
}

function addToLs(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) tasks = [];
  else tasks = JSON.parse(localStorage.getItem('tasks'));

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(task));
}

function clearTasks() {
  taskList.innerHTML = '';
}

function removeTask(e) {
  e.target.parentElement.parentElement.parentElement.remove();
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('#listElement').forEach(element => {
    const item = element.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
}