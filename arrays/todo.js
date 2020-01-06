// Challenge
const todos = [
  { text: 'Walk the dog', completed: true },
  { text: 'Wash the dishes', completed: false },
  { text: 'Study', completed: false },
  { text: 'Exercise', completed: true },
  { text: 'Play the piano', completed: false },
];

// find
const deleteTodo = function(todos, todoText) {
  const index = todos.findIndex(function(todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });

  if (index > -1) {
    todos.splice(index, 1);
  }
};

// filter
const getThingsToDo = function(todos) {
  return todos.filter(function(todo) {
    return !todo.completed;
  });
};

// sort
const sortTodos = function(todos) {
  todos.sort(function(a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);

// console.log(getThingsToDo(todos));

// console.log(deleteTodo(todos, 'study!!'));
// console.log(todos);
