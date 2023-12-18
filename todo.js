let todoList = [
  {
    item: 'Learn React',
    dueDate: '20/12/2023',
  },
  {
    item: 'Revise JavaScript concept',
    dueDate: '25/12/2023',
  },
  {
    item: 'Learn Django',
    dueDate: '28/12/2023',
  },
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let dateItem = dateElement.value;
  // load in localStorage after clicking Add Button
  todoList.push({item: todoItem, dueDate: dateItem});
  localStorage.setItem('todo-list', JSON.stringify(todoList));
  inputElement.value = '';
  dateElement.value = '';

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  // load in localStorage whatever is present in our todoList
  localStorage.setItem('todo-list', JSON.stringify(todoList));
  let newHtml = ''
  // get the items from localStorage and parse it into Object
  let todoItems = JSON.parse(localStorage.getItem('todo-list'));

  for (let i=0; i<todoList.length; i++) {
    newHtml += `
        <span>${todoItems[i].item}</span>
        <span>${todoItems[i].dueDate}</span>
        <button class="btn delete" onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
    `;
  }

  containerElement.innerHTML = newHtml;
}
