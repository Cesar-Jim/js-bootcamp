const todos = getSavedTodos();

// Filters
const filters = {
  searchText: '',
  hideCompleted: false,
};

// Rendering data into the DOM
const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLocaleLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter(function(todo) {
    return !todo.completed;
  });

  // Clear div to avoid having duplicate data
  document.querySelector('#todo-list').innerHTML = '';

  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector('#todo-list').appendChild(summary);

  filteredTodos.forEach(function(todo) {
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('#todo-list').appendChild(p);
  });
};

renderTodos(todos, filters);

// listen and filter applying search terms
document.querySelector('#search-text').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// submit a new todo
document.querySelector('#todo-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const newTodo = {
    text: e.target.elements.newTodo.value,
    completed: false,
  };

  todos.push(newTodo);
  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.newTodo.value = '';
});

// hide completed todos
document
  .querySelector('#hide-completed')
  .addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });
