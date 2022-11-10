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
  filterTasksInput.addEventListener('keydown', filterTasks);
  clearBtn.addEventListener('click', clearTasks);
}

// *Adding EventListeners' Functions
function addTask(e) {
  const li = document.createElement('li');
  // li.className('list-group-item);
  if(taskInput.value === '') {
    alert('Please enter a task below');
  } else {
    taskList.appendChild(li);
  }
  

  e.preventDefault();
}



