// Fetch existing todos from localStorage
const getSavedTodos = function() {
  const todosJSON = localStorage.getItem('todos');

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

// Save todos to localStorage
const saveTodos = function(todos) {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos', todosJSON);
};
