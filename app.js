// *adding Slectors
const newTaskInput = document.querySelector('#newTask');
const taskForm = document.querySelector('#taskForm');
const filterTasksInput = document.querySelector('#filterTasks');
const clearBtn = document.querySelector('#clearTasks');

// *adding Event Listeners
loadEventListeners();

function loadEventListeners() {
  taskForm.addEventListener('submit', addTask);
  filterTasksInput.addEventListener('keydown', filterTasks);
  clearBtn.addEventListener('click', clearTasks);
}


function addTask() {}
function filterTasks() {}
function clearTasks() {}


