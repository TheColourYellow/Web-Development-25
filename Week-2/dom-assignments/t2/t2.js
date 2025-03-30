// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const list = document.getElementById('target');
for (item of todoList) {
  let entry = document.createElement('li');
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', item.id);
  if (item.completed == true) {
    checkbox.checked = true;
  }
  let task = document.createElement('label');
  let taskContent = document.createTextNode(item.task);
  task.htmlFor = item.id;
  task.appendChild(taskContent);
  entry.appendChild(checkbox);
  entry.appendChild(task);
  list.appendChild(entry);
}
