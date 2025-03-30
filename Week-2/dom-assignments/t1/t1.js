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
  let done = '';
  if (item.completed == true) {
    done = 'checked';
  }
  let entry = document.createElement('li');
  entry.insertAdjacentHTML(
    'afterbegin',
    `<input type="checkbox" id="${item.id}" ${done}>`
  );
  entry.insertAdjacentHTML(
    'beforeend',
    `<label for="${item.id}">${item.task}</label>`
  );
  list.appendChild(entry);
}
